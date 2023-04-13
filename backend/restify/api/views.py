from rest_framework.generics import CreateAPIView, UpdateAPIView, RetrieveAPIView

from .serializers import UserSerializer, PasswordSerializer, ProfileSerializer
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404

from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView


class CreateUserView(CreateAPIView):
    serializer_class = UserSerializer


class UpdatePasswordView(RetrieveAPIView, UpdateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = PasswordSerializer
    permission_classes = [IsAuthenticated, ]


class UpdateProfileView(RetrieveAPIView, UpdateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated, ]

    def get_object(self):
        return get_object_or_404(get_user_model(), id=self.kwargs['pk'])


class ViewUser(generics.RetrieveAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user_id = kwargs.get('user_id')
        user = self.get_object()
        serializer = self.get_serializer(user)
        return Response(serializer.data)


class CurrentUserUID(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            return Response({'uid': request.user.id})
        else:
            return Response({'error': 'User is not authenticated'})


class Logout(APIView):
    def get(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)
