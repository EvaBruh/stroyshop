import logging
import os
import random

from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail

from stroyshop import settings
from stroyshop.settings import log_dir
from .serializers import MyTokenObtainPairSerializer
from .models import VerificationCode

# Создание логгера с именем 'utils_logger'
logger = logging.getLogger('utils_logger')

# Настройка обработчика для записи ошибок в файл 'errors_utils.log'
handler = logging.FileHandler(os.path.join(log_dir, 'errors_utils.log'))
handler.setLevel(logging.ERROR)

# Добавление обработчика к логгеру
logger.addHandler(handler)


# Высылаем код верификации на указанную почту
def send_verification_code(email, code):
    try:
        subject = 'Your verification code'
        message = f'Your verification code is {code}'
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [email]
        send_mail(subject, message, email_from, recipient_list)
    except Exception as e:
        logger.error(f'Error in send_verification_code: {e}')
        return False


def generate_verification_code(email):
    try:
        # Генерация случайного числа для верификации от 100000 до 999999
        code = random.randint(100000, 999999)
        # Сейв
        VerificationCode.objects.create(email=email, code=code)
        return code
    except Exception as e:
        logger.error(f'Error in generate_verification_code: {e}')
        return None


# Генерируем новые токены доступа/обновления для выдачи юзеру, переводим из в строковый вид
def generate_access_refresh_tokens(user):
    try:
        refresh = RefreshToken.for_user(user)
        access_token = str(MyTokenObtainPairSerializer.get_token(user))
        refresh_token = str(refresh)
        return access_token, refresh_token
    except Exception as e:
        logger.error(f'Error in generate_access_refresh_tokens: {e}')
        return None, None
