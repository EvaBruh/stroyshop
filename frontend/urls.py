from django.urls import path, re_path, include
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

from . import views, activatemail

from rest_framework_simplejwt.views import (TokenRefreshView,)


# Пути на django rest API
from .api import SaleView, ToolView, HomeToolView, GardenView, DecorView, BuildView, ProductView

router = routers.SimpleRouter()
router.register('api/sale', SaleView)
router.register('api/tools', ToolView)
router.register('api/hometools', HomeToolView)
router.register('api/garden', GardenView)
router.register('api/decor', DecorView)
router.register('api/build', BuildView)
router.register('api/product', ProductView, basename='product')

urlpatterns = [
    path('', views.index),
    path('', include(router.urls)),
    path('api/', include([
        path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
        path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
        path('register/', views.RegisterView.as_view(), name='auth_register'),
        path('test/', views.testEndPoint, name='test'),
        path('change_password/', views.change_password, name='change_password'),
        path('password_recovery/', views.password_recovery, name='password_recovery'),
        path('verify_code/', views.verify_code, name='verify_code'),
        path('reset_password/', views.reset_password, name='reset_password'),
        path('logout/', views.BlacklistRefreshView.as_view(), name='logout'),
        path('activate_mail/', activatemail.send_email_cabinet, name='activate_mail_cabinet'),
        path('', views.getRoutes),
    ])),
    path('activate/<uidb64>/<token>/', views.activate, name='activate'),
    re_path(r'^tools/\w+', views.index),
    re_path(r'^product/\w+', views.index),

    path('tools/', views.index),
    path('hometools/', views.index),
    path('garden/', views.index),
    path('decor/', views.index),
    path('materials/', views.index),
    path('build/', views.index),
    path('privacy/', views.index),
    path('terms/', views.index),
    path('login/', views.index),
    path('register/', views.index),
    path('personal/', views.index, name='personal'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)