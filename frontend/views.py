from django.contrib.auth import password_validation, forms
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response

from .serializers import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated


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
