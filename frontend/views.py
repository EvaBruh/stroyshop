from django.contrib.auth import password_validation, forms, get_user_model
from django.http import JsonResponse
from django.shortcuts import render
from django.utils.http import urlsafe_base64_decode
from rest_framework.decorators import api_view, permission_classes
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework.utils import json
from django.utils.encoding import force_str
from .models import VerificationCode

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated

from .serializers import RegisterSerializer, MyTokenObtainPairSerializer

from .utils import generate_verification_code, send_verification_code, generate_access_refresh_tokens
from .activatemail import account_activation_token

User = get_user_model()


def index(request):
    return render(request, 'index.html')


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


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
    if request.method == 'GET':
        data = f'Gratz {request.user},  все процессы авторизации успешны. GET-запрос в api/test/ пройден.'
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('textPOST')
        data = f'Gratz, API responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
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


def password_recovery(request):
    if request.method == 'POST':
        print('start')
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


def verify_code(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        code = data.get('code')
        # Поиск сохраненного кода подтверждения для указанного адреса электронной почты
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


def reset_password(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        new_password = data.get('new_password')

        # Поиск пользователя с указанным адресом электронной почты
        user = User.objects.filter(email=email).first()
        if user:
            # Установка нового пароля
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


def activate(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = get_user_model().objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.email_confirmed = True
        user.save()
        print('activate success')
    else:
        print('error in activate')