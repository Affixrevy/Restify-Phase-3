# from django.contrib.contenttypes.models import ContentType
# from rest_framework.serializers import ModelSerializer
# from .models import Comments
# from notifications.serializers import NotificationsDetailSerializer
#
#
# class CommentsSerializer(ModelSerializer):
#     class Meta:
#         model = Comments
#         fields = [
#             'author',
#             'content',
#             'address_type',
#             'address_id'
#         ]
#
#
# class CommentsSerializerCreate(ModelSerializer):
#     class Meta:
#         model = Comments
#         fields = [
#             'content',
#             'address_type',
#             'address_id'
#         ]
#
#     # def create(self, validated_data):
#     #     Notifications.objects.create(sender_type=get_user_model(),
#     #                                  sender_id=self.context.get('request').user,
#     #                                  receiver_id=validated_data["address_id"],
#     #                                  reservation=False,
#     #                                  cancellation=False,
#     #                                  comment=True
#     #                                  )
#     #     return super().create(validated_data)
#
#     def create(self, serializer):
#         comment = serializer.save()
#         notification_serializer = models.NotificationsDetailSerializer(data={
#             'sender_type': ContentType.objects.get_for_model(comment.sender),
#             'sender_id': comment.sender.pk,
#             'receiver_id': comment.receiver.pk,
#             'reservation': False,
#             'cancellation': False,
#             'comment': True,
#             'content': f"{comment.sender.username} commented on your post: {comment.content}"
#         })
#         notification_serializer.is_valid(raise_exception=True)
#         notification_serializer.save()
from django.contrib.contenttypes.models import ContentType
from rest_framework import serializers
from .models import Comments, Thread
from api.serializers import PublicUserSerializer


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ('content', 'comment_author', 'date_time')


# TODO add id to a thread field
class ThreadSerializer(serializers.ModelSerializer):
    address_type = serializers.PrimaryKeyRelatedField(queryset=ContentType.objects.all())
    root_comment = serializers.PrimaryKeyRelatedField(queryset=Comments.objects.all())

    class Meta:
        model = Thread
        fields = (
            'id', 'address_type', 'address_id', 'root_comment', 'owner_reply', 'user_reply', 'state', 'reservations')

    # def to_internal_value(self, data):
    #     ret = super().to_internal_value(data)
    #     ret['root_comment'] = Comments.objects.get(pk=ret['root_comment'])
    #     return ret


class ViewComment(serializers.ModelSerializer):
    comment_author = PublicUserSerializer()

    class Meta:
        model = Comments
        fields = ('comment_author', 'date_time', 'content')


class ViewThread(serializers.ModelSerializer):
    address_type = serializers.PrimaryKeyRelatedField(queryset=ContentType.objects.all())
    root_comment = CommentsSerializer()
    owner_reply = CommentsSerializer()
    user_reply = CommentsSerializer()

    # reservations = serializers.PrimaryKeyRelatedField(queryset=Reservation.objects.all(), allow_null=True)

    class Meta:
        model = Thread
        fields = (
            'id', 'address_type', 'address_id', 'root_comment', 'owner_reply', 'user_reply', 'state', 'reservations')
