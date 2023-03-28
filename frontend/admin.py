from django.contrib import admin

from django.contrib.auth.admin import UserAdmin
from rest_framework_simplejwt.token_blacklist.admin import OutstandingTokenAdmin
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken

from frontend.models import CustomUser


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


admin.site.unregister(OutstandingToken)
admin.site.register(OutstandingToken, CustomOutstandingTokenAdmin)
admin.site.register(CustomUser, CustomUserAdmin)