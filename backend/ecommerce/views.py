from django.shortcuts import render
from rest_framework.views import APIView, Response
from .models import Product
from .serializers import ProductSerializer

# Create your views here.
class ProductView(APIView):
  
  def get(self, request, format=None):
    products = Product.objects.all()
    print(products)
    serialized = ProductSerializer(products, many=True)
    return Response(serialized.data)