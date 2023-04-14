from django.db.models import Model, ImageField, CharField, DateField, IntegerField, ForeignKey, CASCADE
from django.contrib.auth import get_user_model


# Create your models here.

class PropertyModel(Model):
    main_pic = ImageField(upload_to='images/', blank=True, null=True)
    name = CharField(max_length=200, default="No Name")
    address = CharField(max_length=200)
    city = CharField(max_length=200, default="Toronto")
    province = CharField(max_length=200, default="Ontario")
    country = CharField(max_length=50)
    price = IntegerField()
    start_date = DateField()
    end_date = DateField()
    num_guests = IntegerField()
    num_beds = IntegerField()
    num_baths = IntegerField()
    amenities = CharField(max_length=500, blank=True, null=True)
    description = CharField(max_length=5000, blank=True, null=True)
    owner = ForeignKey(get_user_model(), on_delete=CASCADE, null=True)


class PropertyImage(Model):
    property = ForeignKey(PropertyModel, on_delete=CASCADE)
    image = ImageField(upload_to='images/')
