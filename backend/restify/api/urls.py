from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
from .views import CreateUserView, UpdatePasswordView, UpdateProfileView, ViewUser, CurrentUserUID

app_name = "api"

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('register/', CreateUserView.as_view(), name='create'),
    path('update/password/<int:pk>', UpdatePasswordView.as_view(), name='update'),
    path('update/profile/<int:pk>', UpdateProfileView.as_view(), name='profile'),
    path('view/<int:pk>', ViewUser.as_view(), name='view_user'),
    path('currentuid/', CurrentUserUID.as_view(), name='current_user_uid'),
    # path('logout', )
]
