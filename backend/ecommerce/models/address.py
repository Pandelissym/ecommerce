from django.db import models

class Address(models.Model):
    street = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    postalCode = models.CharField(max_length=20)
