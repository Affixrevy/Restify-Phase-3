from django.contrib import admin
from .models.property import PropertyModel, PropertyImage

# Register your models here.

admin.site.register(PropertyModel)
admin.site.register(PropertyImage)
