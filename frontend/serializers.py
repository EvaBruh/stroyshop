from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework.exceptions import ValidationError
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers


# Создание token, token access, token refresh
from .activatemail import send_activation_email

User = get_user_model()


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom
        token['username'] = user.username
        token['email'] = user.email
        # ...
        return token

    # ошибка на попытке логина, получилось только так
    def validate(self, attrs):
        try:
            data = super().validate(attrs)
        except:
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
        # Проверка уникальности адреса электронной почты
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

    def create(self, validated_data):
        try:
            user = User.objects.create(username=validated_data['username'], email=validated_data['email'])
            user.set_password(validated_data['password'])
            user.save()
            send_activation_email(self.context['request'], user)
            return user
        except Exception as e:
            raise ValidationError({"error": str(e)})  # Отправка ошибки клиенту

