from django.urls import path

from django.db import router
from django.urls import include

from frontend import views

urlpatterns = [

     path('', views.index),
]