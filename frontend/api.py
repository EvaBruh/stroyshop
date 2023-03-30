from rest_framework.response import Response

from .models import Sale
from rest_framework import viewsets, permissions, pagination
from .serializers import SaleSerializer


# Sale - основные 6 проектов на HomePage
class SaleView(viewsets.ModelViewSet):
    queryset = Sale.objects.all()
    http_method_names = ['get']
    serializer_class = SaleSerializer
    # pagination_class = StandardResultsSetPagination

