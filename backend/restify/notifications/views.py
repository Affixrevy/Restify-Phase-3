from rest_framework.generics import (
    ListAPIView,
    DestroyAPIView,
    CreateAPIView,
)
from django.core.exceptions import MultipleObjectsReturned
from rest_framework.response import Response

from .serializers import NotificationsSerializer, NotificationsDetailSerializer
from .models import Notifications
from .pagination import NotificationsPageNumberPagination


class NotificationsCreateAPI(CreateAPIView):
    serializer_class = NotificationsDetailSerializer
    queryset = Notifications.objects.all()


class NotificationListAPIView(ListAPIView):
    serializer_class = NotificationsSerializer
    queryset = Notifications.objects.all()
    pagination_class = NotificationsPageNumberPagination


class NotificationsDeleteAPIView(DestroyAPIView):
    serializer_class = NotificationsSerializer

    def get_queryset(self):
        notif_id = self.kwargs['pk']
        return Notifications.objects.filter(pk=notif_id)


class NotificationsDeleteAllAPIView(DestroyAPIView):
    serializer_class = NotificationsSerializer

    def get_queryset(self):
        user_id = self.kwargs['pk']
        return Notifications.objects.filter(reciever_id=user_id)


class NotificationsDetailAPIView(ListAPIView):
    serializer_class = NotificationsDetailSerializer

    def get_queryset(self):
        receiver_id = self.kwargs['receiver_id']
        return Notifications.objects.filter(receiver_id=receiver_id)
