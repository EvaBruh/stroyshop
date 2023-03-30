from django.urls import path, re_path, include
from . import views, activatemail

from rest_framework_simplejwt.views import (TokenRefreshView,)

urlpatterns = [
    path('', views.index),
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
    re_path(r'^project/\w+', views.index),
    path('tours/', views.index),
    path('facades/', views.index),
    path('brand/', views.index),
    path('interior/', views.index),
    path('privacy/', views.index),
    path('terms/', views.index),
    path('job/', views.index),
    path('presentation/', views.index),
    path('login/', views.index),
    path('register/', views.index),
    path('personal/', views.index, name='personal'),
]