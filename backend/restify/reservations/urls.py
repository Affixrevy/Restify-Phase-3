from django.urls import path
from .views import ReservationCreateView, ReservationCancelView, ReservationConfirmCancelView, ReservationListView, \
    ReservationTerminateView, ReservationUpdateView, ReservationDenyCancelView, ReservationCompleteView, ReservationDetailView

app_name = "reservations"

urlpatterns = [
    path('create/', ReservationCreateView.as_view(), name='create_reservation'),
    path('<int:pk>/cancel/', ReservationCancelView.as_view(), name='cancel_reservation'),
    path('<int:pk>/confirmcancel/', ReservationConfirmCancelView.as_view(), name='confirm_cancel_reservation'),
    path('<str:request_type>/view/', ReservationListView.as_view(), name='reservation-list'),
    path('<int:pk>/update/', ReservationUpdateView.as_view(), name='reservation-update'),
    path('<int:pk>/terminate/', ReservationTerminateView.as_view(), name='reservation-terminate'),
    path('<int:pk>/deny-cancel/', ReservationDenyCancelView.as_view(), name='reservation-deny-cancel'),
    path('select/<int:pk>/', ReservationDetailView.as_view(), name='reservation-view'),
    path('<int:pk>/complete/', ReservationCompleteView.as_view(), name='reservation-complete'),
]
