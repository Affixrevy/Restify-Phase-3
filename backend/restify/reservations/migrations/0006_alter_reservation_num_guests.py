# Generated by Django 4.2 on 2023-04-17 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reservations', '0005_reservation_num_guests'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservation',
            name='num_guests',
            field=models.IntegerField(default=1),
        ),
    ]
