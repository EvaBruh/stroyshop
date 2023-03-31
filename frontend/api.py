from rest_framework.response import Response

from .models import Sale, ToolCard, HomeCard, GardenCard, DecorCard, BuildCard, Product
from rest_framework import viewsets, permissions, pagination
from .serializers import SaleSerializer, ToolCardSerializer, HomeCardSerializer, GardenCardSerializer, \
    DecorCardSerializer, BuildCardSerializer, ProductSerializer


# Sale - акции скидки
class SaleView(viewsets.ModelViewSet):
    queryset = Sale.objects.all()
    http_method_names = ['get']
    serializer_class = SaleSerializer
    # pagination_class = StandardResultsSetPagination


# Tools - инструменты
class ToolView(viewsets.ModelViewSet):
    queryset = ToolCard.objects.all()
    http_method_names = ['get']
    serializer_class = ToolCardSerializer
    # pagination_class = StandardResultsSetPagination


# HomeTools - для дома
class HomeToolView(viewsets.ModelViewSet):
    queryset = HomeCard.objects.all()
    http_method_names = ['get']
    serializer_class = HomeCardSerializer
    # pagination_class = StandardResultsSetPagination


# Garden - для сада/огорода
class GardenView(viewsets.ModelViewSet):
    queryset = GardenCard.objects.all()
    http_method_names = ['get']
    serializer_class = GardenCardSerializer
    # pagination_class = StandardResultsSetPagination


# Decor - отделочные материалы
class DecorView(viewsets.ModelViewSet):
    queryset = DecorCard.objects.all()
    http_method_names = ['get']
    serializer_class = DecorCardSerializer
    # pagination_class = StandardResultsSetPagination


# Build - стройматериалы
class BuildView(viewsets.ModelViewSet):
    queryset = BuildCard.objects.all()
    http_method_names = ['get']
    serializer_class = BuildCardSerializer
    # pagination_class = StandardResultsSetPagination


# Product - делаем страницу на основе данных для каждого продукта
class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    http_method_names = ['get']
    serializer_class = ProductSerializer
    Response(serializer_class.data, headers={'Content-Type': 'text/html'})
    # для адреса в api/product/productName <-
    lookup_field = 'productName'
    # pagination_class = StandardResultsSetPagination
