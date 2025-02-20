# Generated by Django 4.2 on 2023-04-14 19:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('properties', '0006_propertymodel_city_propertymodel_province'),
    ]

    operations = [
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('pending_awaiting_confirmation', 'Pending - Awaiting Confirmation'), ('confirmed', 'Confirmed'), ('cancelled_awaiting_confirmation', 'Cancelled - Awaiting Confirmation'), ('cancelled', 'Cancelled'), ('terminated', 'Terminated')], max_length=31)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('property', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='properties.propertymodel')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
