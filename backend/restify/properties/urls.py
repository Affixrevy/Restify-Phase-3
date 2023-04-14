from django.urls import path
from .views import CreatePropertyView, UpdatePropertyView, DeletePropertyView, PropertyListView, PropertyImageView, \
    PropertyImageListView

app_name = "properties"

urlpatterns = [
    path('create/', CreatePropertyView.as_view(), name="create"),
    path('update/<int:pk>', UpdatePropertyView.as_view(), name="update"),
    path('delete/<int:pk>', DeletePropertyView.as_view(), name="delete"),
    path('view/', PropertyListView.as_view(), name='list'),
    path('<int:property_id>/upload/', PropertyImageView.as_view(), name='property_image_upload'),
    path('<int:property_id>/images/', PropertyImageListView.as_view(), name='property-image-list'),

]
