from django.db import models
from .customer import Customer
from .enums import Status

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE,
                                 null=False)
    status = models.ForeignKey(Status, null=True, on_delete=models.SET_NULL)
    date = models.DateTimeField(null=False)

