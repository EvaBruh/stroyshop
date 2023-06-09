import html
import logging
import os

from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.utils.html import format_html
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from stroyshop.settings import log_dir
from .activatemail import send_activation_email
from .models import Sale, ToolCard, HomeCard, GardenCard, DecorCard, BuildCard, Product

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


# Sale - отображение акций
class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = '__all__'


# Tools - отображение карточек инструментов
class ToolCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToolCard
        fields = '__all__'


# HomeTools - отображение карточек для дома
class HomeCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeCard
        fields = '__all__'


# Garden - отображение карточек огород/сад
class GardenCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = GardenCard
        fields = '__all__'


# Decor - отображение карточек отделочных материалов
class DecorCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = DecorCard
        fields = '__all__'


# Build - отображение карточек стройматериалов
class BuildCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuildCard
        fields = '__all__'


# Product - странички для продукта
class ProductSerializer(serializers.ModelSerializer):
    description = serializers.SerializerMethodField()
    detail = serializers.SerializerMethodField()
    textOne = serializers.SerializerMethodField()
    textTwo = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'

    def get_description(self, obj):
        return format_html(html.unescape(obj.description).replace('\n', '<br>'))

    def get_detail(self, obj):
        return format_html(html.unescape(obj.detail).replace('\n', '<br>'))

    def get_textOne(self, obj):
        return format_html(html.unescape(obj.textOne).replace('\n', '<br>'))

    def get_textTwo(self, obj):
        return format_html(html.unescape(obj.textTwo).replace('\n', '<br>'))
