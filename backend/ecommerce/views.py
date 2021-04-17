from django.shortcuts import render
from rest_framework.views import APIView, Response
from .models import Product
from .serializers import ProductSerializer, PartialProductSerializer

# Create your views here.
class ProductListView(APIView):

  def get(self, request, format=None):
    products = Product.objects.raw("SELECT id, name, price, image FROM ecommerce_product")
    serialized = PartialProductSerializer(products, many=True, context={"request": request})
    return Response(serialized.data)

class ProductView(APIView):

  def get(self, request, id, format=None):
    queryset = Product.objects.filter(id=id)

    if not queryset.exists():
      return Response({"Error": "Product not found"}, status=404)
    print(queryset[0].size)
    serialized = ProductSerializer(queryset[0], context={"request": request})
    return Response(serialized.data)