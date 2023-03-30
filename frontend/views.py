import logging
import os

from django.contrib.auth import password_validation, forms, get_user_model
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, redirect

from django.utils.http import urlsafe_base64_decode
from django.utils.encoding import force_str

from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.utils import json
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated

from stroyshop.settings import log_dir
from .serializers import RegisterSerializer, MyTokenObtainPairSerializer
from .models import VerificationCode
from .utils import generate_verification_code, send_verification_code, generate_access_refresh_tokens
from .activatemail import account_activation_token

# Чтобы всегда была текущая модель юзера
User = get_user_model()

# Создание логгера с именем 'views_logger'
logger = logging.getLogger('views_logger')

# Настройка обработчика для записи ошибок в файл 'errors_views.log'
handler = logging.FileHandler(os.path.join(log_dir, 'errors_views.log'))
handler.setLevel(logging.ERROR)

# Добавление обработчика к логгеру
logger.addHandler(handler)


def index(request):
    return render(request, 'index.html')


# Основная генерация JWT-токенов
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# Регистрация
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


# Пути для токенов (подключено в urls.py)
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/register',
        '/api/token/refresh'
    ]
    return Response(routes)


# срабатывает при попадании в api/test/. Вернёт только если юзер аутентифицирован и это POST/GET запрос.
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    try:
        if request.method == 'GET':
            data = {
                'response': f'Как дела, {request.user}? GET-запрос в api/test/ пройден, всё впорядке.',
                'email_confirmed': request.user.email_confirmed
            }
            return Response(data, status=status.HTTP_200_OK)

        elif request.method == 'POST':
            text = request.POST.get('textPOST')
            data = {
                'response': f'Как дела, {request.user}? POST-запрос в api/test/ пройден, всё впорядке. {text}',
                'email_confirmed': request.user.email_confirmed
            }
            return Response(data, status=status.HTTP_200_OK)
        return Response({}, status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        logger.error(f'Error in view testEndPoint: {e}')
        data = {'error': 'Server error.'}
        return Response(data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# При logOut добавляем токены юзера в blacklist (новые даются при логине)
class BlacklistRefreshView(APIView):
    try:
        def post(self, request):
            token = RefreshToken(request.data.get('token_refresh'))
            token.blacklist()
            return Response("Success")
    except Exception as e:
        logger.error(f'Error in view BlacklistRefreshView: {e}')



# Меняем пароль из ЛК. Проверяем старый пароль, валидируем и ставим новый.
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
    try:
        old_password = request.data.get('old_password')
        new_password = request.data.get('new_password')
        if request.user.check_password(old_password):
            try:
                password_validation.validate_password(new_password, user=request.user)
                request.user.set_password(new_password)
                request.user.save()
                return Response({'response': 'Пароль успешно изменён.'}, status=status.HTTP_200_OK)
            except forms.ValidationError as err:
                errors = list(err)
                return Response({'response': errors}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'response': 'Старый пароль не совпадает.'}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        logger.error(f'Error in view change_password: {e}')
        data = {'error': 'Server error.'}
        return Response(data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# Восстановление пароля по email.
def password_recovery(request):
    try:
        if request.method == 'POST':
            data = json.loads(request.body)
            email = data.get('email')

            # Проверка наличия пользователя с указанным адресом электронной почты
            if User.objects.filter(email=email).exists():
                # Генерация кода подтверждения
                code = generate_verification_code(email)
                # Отправка кода подтверждения на указанный адрес электронной почты
                send_verification_code(email, code)
                return JsonResponse({'status': 'success', 'message': 'Пользователь найден.'})
            else:
                return JsonResponse({'status': 'error', 'message': 'Пользователь не найден.'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Что-то пошло не так.'})
    except Exception as e:
        logger.error(f'Error in view password_recovery: {e}')
        data = {'error': 'Server error.'}
        return JsonResponse(data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# Валидация кода верификации, который нам даёт юзер
def verify_code(request):
    try:
        if request.method == 'POST':
            data = json.loads(request.body)
            email = data.get('email')
            code = data.get('code')
            # Поиск последнего сохраненного кода подтверждения для указанного адреса электронной почты
            verification_code = VerificationCode.objects.filter(email=email).last()
            if verification_code:
                # Проверка совпадения кодов и срока действия кода
                if verification_code.code == code and verification_code.is_valid():
                    # Выдача новых токенов доступа и обновления
                    user = User.objects.get(email=email)
                    access_token, refresh_token = generate_access_refresh_tokens(user)
                    return JsonResponse({'status': 'success', 'message': 'Успешная верификация.', 'access_token': access_token, 'refresh_token': refresh_token})
                else:
                    return JsonResponse({'status': 'error', 'message': 'Код не совпадает.'})
            else:
                return JsonResponse({'status': 'error', 'message': 'Email не совпадает.'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Что-то пошло не так.'})
    except Exception as e:
        logger.error(f'Error in view verify_code: {e}')
        data = {'error': 'Server error.'}
        return JsonResponse(data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# Сбрасываем пароль после верификации.
def reset_password(request):
    try:
        if request.method == 'POST':
            data = json.loads(request.body)
            email = data.get('email')
            new_password = data.get('new_password')

            # Поиск пользователя с указанным адресом электронной почты
            user = User.objects.filter(email=email).first()
            if user:
                # Установка и валидация нового пароля
                try:
                    password_validation.validate_password(new_password, user=user)
                    user.set_password(new_password)
                    user.save()
                    return JsonResponse({'status': 'success', 'message': 'Вы сменили пароль.'})
                except forms.ValidationError as err:
                    errors = list(err)
                    return JsonResponse({'status': 'error', 'message': errors})
            else:
                return JsonResponse({'status': 'error', 'message': 'Email не совпадает.'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Что-то пошло не так.'})
    except Exception as e:
        logger.error(f'Error in view reset_password: {e}')
        data = {'error': 'Server error.'}
        return JsonResponse(data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# Генерируем и валидируем ссылку в email письме для активации аккаунта
def activate(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = get_user_model().objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist) as e:
        logger.error(f'Error in view activate: {e}')
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.email_confirmed = True
        user.save()
        return redirect('personal')
    else:
        return HttpResponse('Ссылка устарела.')