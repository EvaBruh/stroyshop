import logging
import os

from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from stroyshop.settings import log_dir
from .activatemail import send_activation_email

User = get_user_model()

# Создание логгера с именем 'serialize_logger'
logger = logging.getLogger('serialize_logger')

# Настройка обработчика для записи ошибок в файл 'errors_serializers.log'
handler = logging.FileHandler(os.path.join(log_dir, 'errors_serializers.log'))
handler.setLevel(logging.ERROR)

# Добавление обработчика к логгеру
logger.addHandler(handler)


# Создание token, token access, token refresh
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        try:
            token = super().get_token(user)
            # Add custom
            token['username'] = user.username
            token['email'] = user.email
            # ...
            return token
        except Exception as e:
            logger.error(f'Error in serializers MyTokenObtainPairSerialize - get_token: {e}')

    # вывод ошибки на попытке логина, получилось только так
    # Вызов метода validate родительского класса с помощью функции super() -
    # для проверки и очистки входных данных перед сохранением в базе данных или выполнением других операций.
    def validate(self, attrs):
        try:
            data = super().validate(attrs)
        except Exception as e:
            logger.error(f'Error in serializers MyTokenObtainPairSerialize - validate: {e}')
            # здесь можно добавить свои сообщения об ошибках
            if 'no_active_account':
                e = dict({'no_active_account': ''})
                e['no_active_account'] = 'Неверное имя пользователя или пароль.'
            raise serializers.ValidationError(e)
        return data


# Регистрация юзера в БД
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'email_confirmed')

    def validate(self, attrs):
        # Валидация полей с паролями
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Пароли не совпадают."})
        return attrs

    def validate_email(self, value):
        # Проверка уникальности адреса электронной почты (exists() возвращает True/False)
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Этот адрес электронной почты уже используется.")
        return value

    def validate_username(self, value):
        # Проверка уникальности логина
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Этот логин уже используется.")

        # Проверка длины логина
        if len(value) < 6:
            raise serializers.ValidationError("Логин должен содержать не менее 6 символов.")

        # Проверка символов логина
        if not value.isalnum():
            raise serializers.ValidationError("Логин может содержать только буквы и цифры.")
        return value

    # Если всё валидно, юзер создается в БД и получает email письмо для активации аккаунта
    def create(self, validated_data):
        try:
            user = User.objects.create(username=validated_data['username'], email=validated_data['email'])
            user.set_password(validated_data['password'])
            user.save()
            send_activation_email(self.context['request'], user)
            return user
        except Exception as e:
            logger.error(f'Error in serializers MyTokenObtainPairSerialize - create: {e}')
            raise ValidationError({"error": str(e)})  # Отправка ошибки клиенту

