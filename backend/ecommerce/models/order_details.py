from django.db import models
from .order import Order
from .product import Product

class OrderDetails(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=False)
    amount = models.IntegerField()
