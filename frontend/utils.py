import random

from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import MyTokenObtainPairSerializer

from django.core.mail import send_mail
from stroyshop import settings

from .models import VerificationCode


def send_verification_code(email, code):
    subject = 'Your verification code'
    message = f'Your verification code is {code}'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject, message, email_from, recipient_list)


def generate_verification_code(email):
    # Генерация случайного числа от 100000 до 999999
    code = random.randint(100000, 999999)
    # Сейв
    VerificationCode.objects.create(email=email, code=code)
    return code


def generate_access_refresh_tokens(user):

    refresh = RefreshToken.for_user(user)
    access_token = str(MyTokenObtainPairSerializer.get_token(user))
    refresh_token = str(refresh)
    return access_token, refresh_token



