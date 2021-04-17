from rest_framework import serializers
from .models import Product


class PartialProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = ['id', 'name', 'image', 'price']

class ProductSerializer(serializers.ModelSerializer):
  size = serializers.StringRelatedField()
  color = serializers.StringRelatedField()

  class Meta:
    model = Product
    fields = ['id', 'name', 'description', 'image', 'size', 'color', 'price']
