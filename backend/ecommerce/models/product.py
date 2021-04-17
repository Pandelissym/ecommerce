from django.db import models
from django.db.models import Q

from .enums import Size, Color

class Product(models.Model):
    name = models.CharField(max_length=50, null=False, unique=True)
    description = models.CharField(max_length=200)
    image = models.ImageField(upload_to="product_images/",  null=True)
    size = models.ForeignKey(Size, on_delete=models.SET_NULL, null=True)
    color = models.ForeignKey(Color, on_delete=models.SET_NULL, null=True)
    amount = models.IntegerField(null=False, default=0, validators=[models.PositiveIntegerField])
    price = models.DecimalField(max_digits=15, decimal_places=2)

    class Meta:
        constraints = [models.CheckConstraint(name="positive_amount", check=Q(amount__gte=0)),
                       models.CheckConstraint(name="positive_price", check=Q(price__gte=0))]
    def __str__(self):
        return self.name