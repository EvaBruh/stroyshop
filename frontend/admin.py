from django.contrib import admin

from django.contrib.auth.admin import UserAdmin
from rest_framework_simplejwt.token_blacklist.admin import OutstandingTokenAdmin
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken

from frontend.models import CustomUser, Sale, ToolCard, HomeCard, GardenCard, DecorCard, BuildCard

admin.site.site_header = "StroyShop Admin"


class CustomUserAdmin(UserAdmin):
    # добавление поля email_confirmed в fieldsets для отображения на странице редактирования пользователя
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('email_confirmed',)}),
    )
    # добавление поля email_confirmed в list_display для отображения в списке пользователей
    list_display = UserAdmin.list_display + ('email_confirmed',)


# Переопределяем TokenAdmin, даем права на удаление Out-g токенов вместе с юзером
class CustomOutstandingTokenAdmin(OutstandingTokenAdmin):
    list_display = ('__str__', 'user', 'jti', 'created_at', 'expires_at')

    def user(self, obj):
        return obj.user

    def has_delete_permission(self, request, obj=None):
        return True


# Sale - отображение акций
class SaleAdmin(admin.ModelAdmin):

    class Meta:
        model = Sale

    readonly_fields = ['helper_card',]
    list_display = ('id', 'product', 'price', 'description', 'urlProduct', 'image')
    list_display_links = ('id', 'product', 'price', 'description')
    search_fields = ('id', 'product', 'price', 'description')


# Tools - инструменты
class ToolsAdmin(admin.ModelAdmin):

    class Meta:
        model = ToolCard

    readonly_fields = ['helper_card',]
    list_display = ('id', 'product', 'price', 'description', 'urlProduct', 'image')
    list_display_links = ('id', 'product', 'price', 'description')
    search_fields = ('id', 'product', 'price', 'description')


# HomeTools - для дома
class HomeAdmin(admin.ModelAdmin):

    class Meta:
        model = HomeCard

    readonly_fields = ['helper_card',]
    list_display = ('id', 'product', 'price', 'description', 'urlProduct', 'image')
    list_display_links = ('id', 'product', 'price', 'description')
    search_fields = ('id', 'product', 'price', 'description')


# Garden - сад/огород
class GardenAdmin(admin.ModelAdmin):

    class Meta:
        model = GardenCard

    readonly_fields = ['helper_card',]
    list_display = ('id', 'product', 'price', 'description', 'urlProduct', 'image')
    list_display_links = ('id', 'product', 'price', 'description')
    search_fields = ('id', 'product', 'price', 'description')


# Decor - отделочные материалы
class DecorAdmin(admin.ModelAdmin):

    class Meta:
        model = DecorCard

    readonly_fields = ['helper_card',]
    list_display = ('id', 'product', 'price', 'description', 'urlProduct', 'image')
    list_display_links = ('id', 'product', 'price', 'description')
    search_fields = ('id', 'product', 'price', 'description')


# Build - стройматериалы
class BuildAdmin(admin.ModelAdmin):

    class Meta:
        model = BuildCard

    readonly_fields = ['helper_card',]
    list_display = ('id', 'product', 'price', 'description', 'urlProduct', 'image')
    list_display_links = ('id', 'product', 'price', 'description')
    search_fields = ('id', 'product', 'price', 'description')


admin.site.unregister(OutstandingToken)
admin.site.register(OutstandingToken, CustomOutstandingTokenAdmin)
admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Sale, SaleAdmin)
admin.site.register(ToolCard, ToolsAdmin)
admin.site.register(HomeCard, HomeAdmin)
admin.site.register(GardenCard, GardenAdmin)
admin.site.register(DecorCard, DecorAdmin)
admin.site.register(BuildCard, BuildAdmin)
