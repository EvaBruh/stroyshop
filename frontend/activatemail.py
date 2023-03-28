import logging
import os

import six
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from rest_framework.response import Response
from rest_framework.decorators import api_view

from stroyshop.settings import log_dir

User = get_user_model()

# Создание логгера с именем 'email_logger'
logger = logging.getLogger('email_logger')

# Настройка обработчика для записи ошибок в файл 'errors_activatemail.log'
handler = logging.FileHandler(os.path.join(log_dir, 'errors_activatemail.log'))
handler.setLevel(logging.ERROR)

# Добавление обработчика к логгеру
logger.addHandler(handler)


# Генерируем token для проверки подлинности ссылки в письме
class AccountActivationTokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return (
            six.text_type(user.pk) + six.text_type(timestamp) +
            six.text_type(user.email_confirmed)
        )


account_activation_token = AccountActivationTokenGenerator()


# Срабатывает отправка письма для активации после регистрации
def send_activation_email(request, user):
    try:
        current_site = get_current_site(request)
        mail_subject = 'Привет, активируем?'
        text_content = 'Активируй'
        html_content = render_to_string('acc_active_email.html', {
            'user': user,
            'domain': current_site.domain,
            'uid': urlsafe_base64_encode(force_bytes(user.pk)),
            'token': account_activation_token.make_token(user),
        })
        to_email = user.email
        msg = EmailMultiAlternatives(mail_subject, text_content, 'alteree@yandex.ru', [to_email])
        msg.attach_alternative(html_content, "text/html")
        msg.send()
    except Exception as e:
        logger.error(f'Error in send_activation_email: {e}')


# Возможность выслать повторное письмо из ЛК для активации аккаунта
@api_view(["POST"])
def send_email_cabinet(request):
    email = request.data.get("email")
    user = User.objects.get(email=email)
    try:
        current_site = get_current_site(request)
        mail_subject = 'Привет, активируем?'
        text_content = 'Активируй'
        html_content = render_to_string('acc_active_email.html', {
            'user': user,
            'domain': current_site.domain,
            'uid': urlsafe_base64_encode(force_bytes(user.pk)),
            'token': account_activation_token.make_token(user),
        })
        to_email = user.email
        msg = EmailMultiAlternatives(mail_subject, text_content, 'alterede@yandex.ru', [to_email])
        msg.attach_alternative(html_content, "text/html")
        msg.send()
        return Response({"status": "success", "message": 'yes'})
    except Exception as e:
        logger.error(f'Error in send_email_cabinet: {e}')
        return Response({"status": "error", "message": str(e)})