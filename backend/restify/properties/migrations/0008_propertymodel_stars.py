# Generated by Django 4.2 on 2023-04-17 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0007_alter_propertymodel_price_dailyprice'),
    ]

    operations = [
        migrations.AddField(
            model_name='propertymodel',
            name='stars',
            field=models.DecimalField(decimal_places=1, default=0, max_digits=2),
        ),
    ]
