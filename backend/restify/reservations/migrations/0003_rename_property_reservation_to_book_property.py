# Generated by Django 4.2 on 2023-04-14 22:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reservations', '0002_alter_reservation_status'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reservation',
            old_name='property',
            new_name='to_book_property',
        ),
    ]
