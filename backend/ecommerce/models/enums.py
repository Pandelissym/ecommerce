from django.db import models

class StatusManager(models.Manager):
    def get_by_natural_key(self, status):
        return self.get(status=status)

class Status(models.Model):
    class StatusChoices(models.TextChoices):
        PROCESSING = "PROCESSING"
        SHIPPED = "SHIPPED"
        DELIVERED = "DELIVERED"

    status = models.CharField(max_length=50, choices=StatusChoices.choices, null=False)
    objects = StatusManager()

    def __str__(self):
        return self.status

class SizeManager(models.Manager):
    def get_by_natural_key(self, size):
        return self.get(size=size)

class Size(models.Model):
    class SizeChoices(models.TextChoices):
        SMALL = "S"
        MEDIUM = "M"
        LARGE = "L"
        EXTRA_LARGE = "XL"

    size = models.CharField(max_length=10, choices=SizeChoices.choices, null=False)
    objects = SizeManager()

    def __str__(self):
        return self.size


class Color(models.Model):
    class ColorChoices(models.TextChoices):
        RED = "Red"
        BLACK = "Black"
        WHITE = "White"
        YELLOW = "Yellow"
        PINK = "Pink"
        GREEN = "Green"
        BLUE = "Blue"

    color = models.CharField(max_length=50, choices=ColorChoices.choices, null=False)

    def __str__(self):
        return self.color


