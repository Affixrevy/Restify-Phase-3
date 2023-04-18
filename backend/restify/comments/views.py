# from rest_framework.generics import ListAPIView, CreateAPIView
# from .serializers import CommentsSerializer, CommentsSerializerCreate
# from .models import Comments
# from .pagination import CommentsPageNumberPagination
#
#
# class CommentsCreateAPIView(CreateAPIView):
#     serializer_class = CommentsSerializer
#     queryset = Comments.objects.all()
#     pagination_class = CommentsPageNumberPagination
#
#     # def perform_create(self, serializer):
#     #     serializer.save(author=serializer.context.get('request').user)
#
#
# class CommentsListAPIView(ListAPIView):
#     serializer_class = CommentsSerializer
#     queryset = Comments.objects.all()
#     pagination_class = CommentsPageNumberPagination
from django.contrib.contenttypes.models import ContentType
from django.utils import timezone
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Comments, Thread
from .serializers import CommentsSerializer, ThreadSerializer, ViewThread
from properties.models.property import PropertyModel
from reservations.models import Reservation
from django.contrib.auth import get_user_model


class CreateCommentView(generics.CreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        # Check if the request is for a property or user profile comment
        # if not (request.data.get("address_type") and request.data.get("address_id")):
        #     return Response({"error": "Invalid address_type or address_id"}, status=status.HTTP_400_BAD_REQUEST)

        data = request.data
        subject = data.get('subject_type')

        # Check if the comment subject_type is another user or a property. Error if no subject was sent
        if subject == 'user':
            model = get_user_model()
        elif subject == 'property':
            model = PropertyModel
        else:
            return Response({"error": "Invalid comment type"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            obj = model.objects.get(pk=data['subject_id'])
            address_type = ContentType.objects.get_for_model(obj).pk
        except model.DoesNotExist:
            return Response({"error": f"{subject.capitalize()} not found"}, status=status.HTTP_404_NOT_FOUND)

        # Check if reservation is completed
        try:
            reservation = Reservation.objects.get(pk=data['reservation_id'])
        except Reservation.DoesNotExist:
            return Response({"error": "Reservation not found"}, status=status.HTTP_404_NOT_FOUND)

        if reservation.status != 'completed':
            return Response({"error": "A comment can only be created if the Reservation is completed"},
                            status=status.HTTP_400_BAD_REQUEST)

        if subject == 'user' and request.user.id != reservation.to_book_property.owner.id:
            print(reservation.to_book_property.owner.id)
            print(request.user.id)
            return Response({"error": "Only the owner of a property can make a comment on a user"},
                            status=status.HTTP_400_BAD_REQUEST)
        elif subject == 'property' and request.user.id != reservation.user.id:
            print(f'Request: {request.user.id}, Reservation: {reservation.user.id}')
            return Response({"error": "Only the guest of a property can make a comment on the property"},
                            status=status.HTTP_400_BAD_REQUEST)

        # Add the current date and time to the request data
        request_data = data.copy()
        request_data['date_time'] = timezone.now().isoformat()

        # Add user to request
        request_data['author'] = request.user.id

        # Create the comment
        comment_serializer = self.get_serializer(data=request_data)
        comment_serializer.is_valid(raise_exception=True)
        comment = comment_serializer.save()

        # Automatically create a new thread for the comment
        thread_data = {
            "address_type": address_type,
            "address_id": obj.pk,
            "root_comment": comment.id,
            "state": -1 if isinstance(obj, get_user_model()) else 1
        }

        thread_serializer = ThreadSerializer(data=thread_data)
        thread_serializer.is_valid(raise_exception=True)
        thread_serializer.save()

        response_data = {
            "comment": comment_serializer.data,
            "thread": thread_serializer.data
        }

        return Response(response_data, status=status.HTTP_201_CREATED)


class CreateReplyView(generics.CreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        data = request.data
        try:
            thread = Thread.objects.get(pk=data['thread_id'])
        except Thread.DoesNotExist:
            return Response({"error": "Thread not found"}, status=status.HTTP_404_NOT_FOUND)

        print(thread.address_type)

        # Check if the thread is addressing a property or user
        if thread.address_type.model_class() == get_user_model():
            # The thread is addressing a User
            return Response({"error": "You cannot reply to a user comment"}, status=status.HTTP_400_BAD_REQUEST)
        elif thread.address_type.model_class() != PropertyModel:
            # The thread
            return Response({"error": "Invalid address type"}, status=status.HTTP_400_BAD_REQUEST)

        if thread.state == 3:
            return Response({"error": "Thread is closed. No replies possible"}, status=status.HTTP_400_BAD_REQUEST)

        # The thread is addressing a Property
        # Check thread depth
        if not thread.owner_reply and not thread.user_reply:
            # Handle owner reply code
            request_data = data.copy()
            request_data['date_time'] = timezone.now().isoformat()

            # Add user to request
            request_data['author'] = request.user.id

            # Create the comment
            comment_serializer = self.get_serializer(data=request_data)
            comment_serializer.is_valid(raise_exception=True)
            comment = comment_serializer.save()

            thread.owner_reply = comment
            thread.state = 2
            thread.save()
            return Response(comment_serializer.data, status=status.HTTP_200_OK)
        elif thread.owner_reply and not thread.user_reply:
            # Handle user reply
            request_data = data.copy()
            request_data['date_time'] = timezone.now().isoformat()

            # Add user to request
            request_data['author'] = request.user.id

            # Create the comment
            comment_serializer = self.get_serializer(data=request_data)
            comment_serializer.is_valid(raise_exception=True)
            comment = comment_serializer.save()

            thread.user_reply = comment
            thread.state = 3
            thread.save()
            return Response(comment_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid thread state"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class PropertyCommentView(generics.ListAPIView):
    serializer_class = ViewThread

    def get_queryset(self):
        property_id = self.kwargs['pk']
        property_content_type = ContentType.objects.get_for_model(PropertyModel)
        return Thread.objects.filter(address_type=property_content_type, address_id=property_id)


class UserCommentView(generics.ListAPIView):
    serializer_class = ViewThread

    def get_queryset(self):
        user_id = self.kwargs['pk']
        user_content_type = ContentType.objects.get_for_model(get_user_model())
        return Thread.objects.filter(address_type=user_content_type, address_id=user_id)
