# Generated by Django 3.2 on 2021-04-17 17:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0005_alter_product_amount'),
    ]

    operations = [
        migrations.AddConstraint(
            model_name='product',
            constraint=models.CheckConstraint(check=models.Q(amount__gte=0), name='positive_amount'),
        ),
        migrations.AddConstraint(
            model_name='product',
            constraint=models.CheckConstraint(check=models.Q(price__gte=0), name='positive_price'),
        ),
    ]
