from django.urls import path
from .views import CreateCommentView, PropertyCommentView, UserCommentView, CreateReplyView

app_name = "comments"

urlpatterns = [
    path('create/', CreateCommentView.as_view(), name='create_comment'),
    path('reply/', CreateReplyView.as_view(), name='create_reply'),
    path("property/<int:pk>/", PropertyCommentView.as_view(), name="property_comments"),
    path("user/<int:pk>/", UserCommentView.as_view(), name="user_comments"),
]

