from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.utils import timezone

from reservations.models import Reservation


class Comments(models.Model):
    content = models.CharField(max_length=200)
    comment_author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, null=True)
    date_time = models.DateTimeField(default=timezone.now().isoformat())


class Thread(models.Model):
    address_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    address_id = models.PositiveIntegerField()
    address_object = GenericForeignKey("address_type", "address_id")

    root_comment = models.ForeignKey(Comments, on_delete=models.CASCADE, null=False, related_name='root_comment')
    owner_reply = models.ForeignKey(Comments, on_delete=models.CASCADE, null=True, related_name='owner_comment')
    user_reply = models.ForeignKey(Comments, on_delete=models.CASCADE, null=True, related_name='root_reply')

    state = models.IntegerField(null=False, default=-2)

    reservations = models.OneToOneField(Reservation, on_delete=models.CASCADE, null=True, related_name='thread')
