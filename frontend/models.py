from django.db import models
from django.contrib.auth.models import User, AbstractUser
from django.utils import timezone

from stroyshop import settings


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class CustomUser(AbstractUser):
    # добавление новых полей
    email_confirmed = models.BooleanField(default=False)


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Cart(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'product')


class VerificationCode(models.Model):
    email = models.EmailField()
    code = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)

    def is_valid(self):
        # Проверка срока действия кода (60 минут)
        return timezone.now() - self.created_at < timezone.timedelta(minutes=60)


# Абстрактный базовый класс для моделей, от которого будем наследовать
class BaseCard(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True)
    product = models.CharField(default='', max_length=100, verbose_name='Название')
    price = models.CharField(default='', max_length=50, verbose_name='Цена')
    description = models.TextField(default='', max_length=200, verbose_name='Описание')
    image = models.ImageField(blank=True, verbose_name='Фото',
                              help_text='Рекомендуемое разрешение до 2k. пр. ~1700х1100, 1448x1448')
    urlProduct = models.CharField(max_length=200, verbose_name='URL-адрес проекта')
    helper_card = models.CharField(max_length=500, verbose_name='ПРИМЕЧАНИЕ',
                                   default='НЕ ИСПОЛЬЗУЙТЕ ОГРОМНЫЕ КАРТИНКИ! Ниже кнопка для оптимизации. Далее на ПК откройте картинку -> ПКМ -> изменить размер изображения, выберите между 1 и 2 пунктами.')

    class Meta:
        abstract = True


# Sale - Модель для отображения акций
class Sale(BaseCard):
    saletime = models.TextField(default='', max_length=150, verbose_name='Время акции')

    class Meta:
        verbose_name = 'Карточки - Акции'
        verbose_name_plural = 'Карточки - Акции'


class ToolCard(BaseCard):
    saletime = models.TextField(default='', max_length=150, verbose_name='Время акции')

    class Meta:
        verbose_name = 'Карточки - Инструменты'
        verbose_name_plural = 'Карточки - Инструменты'


class HomeCard(BaseCard):
    saletime = models.TextField(default='', max_length=150, verbose_name='Время акции')

    class Meta:
        verbose_name = 'Карточки - Для дома'
        verbose_name_plural = 'Карточки - Для дома'


class GardenCard(BaseCard):
    saletime = models.TextField(default='', max_length=150, verbose_name='Время акции')

    class Meta:
        verbose_name = 'Карточки - Огород и Сад'
        verbose_name_plural = 'Карточки - Огород и Сад'


class DecorCard(BaseCard):
    saletime = models.TextField(default='', max_length=150, verbose_name='Время акции')

    class Meta:
        verbose_name = 'Карточки - Отделочные Материалы'
        verbose_name_plural = 'Карточки - Отделочные Материалы'


class BuildCard(BaseCard):
    saletime = models.TextField(default='', max_length=150, verbose_name='Время акции')

    class Meta:
        verbose_name = 'Карточки - Стройматериалы'
        verbose_name_plural = 'Карточки - Стройматериалы'