from django.db import models
from django.contrib.auth.models import User, AbstractUser
from django.utils import timezone
from django.utils.html import escape

from stroyshop import settings


#class Category(models.Model):
#    name = models.CharField(max_length=255)#

#    def __str__(self):
#        return self.name


class CustomUser(AbstractUser):
    # добавление новых полей
    email_confirmed = models.BooleanField(default=False)


# Product - делаем страницу на основе данных для каждого продукта
class Product(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=500, verbose_name='Имя проекта', help_text='Имя проекта на самой странице продукта.')
    productName = models.CharField(default='', max_length=1000, verbose_name='Имя ссылки продукта',
                                   help_text='Имя для ссылки. Пример: gvozdi -> получаем: stroyshop.ru/product/gvozdi')
    description = models.TextField(default='<p> Абзац </p>\n', blank=True, max_length=3000, verbose_name='Описание', help_text='3000 символов.')
    price = models.PositiveIntegerField(default=0, verbose_name='Цена')
    detail = models.TextField(default='<p> Абзац </p>\n <ul>\n<li>Пункт</li>\n</ul>\n', max_length=2000, verbose_name='Характеристики', help_text='2000 символов.')
    textOne = models.TextField(default='<p> Абзац </p>\n', max_length=2000, verbose_name='Доп. текст, 2000 символов.',
                                        help_text='Текст после первой картинки. Сверху, над именем проекта.')
    textTwo = models.TextField(default='<p> Абзац </p>\n', max_length=2000, verbose_name='Доп. текст, 2000 символов.',
                                        help_text='Текст после первой картинки. Снизу, под именем проекта.')

    image1 = models.ImageField(blank=True, verbose_name='Фотокарточка 1',
                               help_text='Рекомендуемое разрешение - 2k.')
    image2 = models.ImageField(blank=True, verbose_name='Фотокарточка 2',
                               help_text='Рекомендуемое разрешение - 2k.')
    image3 = models.ImageField(blank=True, verbose_name='Фотокарточка 3',
                               help_text='Рекомендуемое разрешение - 2k.')

    helper = models.CharField(max_length=500, verbose_name='ПРИМЕЧАНИЕ',
                              default='НЕ ИСПОЛЬЗУЙТЕ ОГРОМНЫЕ КАРТИНКИ! Ниже кнопка для оптимизации. Далее на ПК откройте картинку -> ПКМ -> изменить размер изображения, выберите пункт 3.')
    help_product = models.CharField(max_length=1000, verbose_name='ПРИМЕЧАНИЕ',
                                   default='Вы можете удалить/добавить любые html-теги.\n'
                                           'тег <p> - абзац, введите между ним текст.\n'
                                           'Контролируйте ваши тексты как вам удобно, делите абзацы на строки с помощью Enter.'
                                           'тег <ul> - список с точками. Внутри него тег <li>, в него вписывается элемент списка.\n'
                                           'тег <ol> - список с цифрами. Замените <ul> на <ol>.\n'
                                           'Просто скопируйте строку с пунктом <li> и вставьте сколько пунктов вам нужно. Или сделайте несколько списков.\n'
                                           'Если вы хотите добавить заголовок - <h2> Заголовок </h2> (от большего (h1) к меньшему (h6).\n'
                                           'Не бойтесь и помните, что вы всегда можете сохранить и посмотреть результат на сайте, а так же макет справа в меню админ. панели "Вакансии"!')

    class Meta:
        verbose_name = 'Странички продуктов'
        verbose_name_plural = 'Странички продуктов'

    def formatted_description(self, field):
        return escape(getattr(self, field)).replace('\n', '<br>')

    def __str__(self):
        return self.name


#class Cart(models.Model):
#    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
#    product = models.ForeignKey(Product, on_delete=models.CASCADE)
#    quantity = models.PositiveIntegerField(default=1)
#    price = models.DecimalField(max_digits=10, decimal_places=2)
#    created_at = models.DateTimeField(auto_now_add=True)

 #   class Meta:
  #      unique_together = ('user', 'product')


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


