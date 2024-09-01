from django.urls import path

from .views import (
    CustomRefreshView,
    CustomTokenObtainPairView,
    CustomTokenVerifyView,
    LogoutView,
)

urlpatterns = [
    path("jwt/create/", CustomTokenObtainPairView.as_view()),
    path("jwt/refresh/", CustomRefreshView.as_view()),
    path("jwt/verify/", CustomTokenVerifyView.as_view()),
    path("logout/", LogoutView.as_view()),
]
