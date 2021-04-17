from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from .address import Address

class Customer(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    email = models.EmailField()
    phoneNumber = PhoneNumberField()
    date = models.DateTimeField()
    address = models.ForeignKey(Address, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.firstName + " " + self.lastName