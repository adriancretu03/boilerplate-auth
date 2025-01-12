from django.urls import path

from .views import (
    CustomProviderAuthView,
    CustomRefreshView,
    CustomTokenObtainPairView,
    CustomTokenVerifyView,
    LogoutView,
)

urlpatterns = [
    path(
        "o/<provider>/",
        CustomProviderAuthView.as_view(),
        name="provider-auth",
    ),
    path("jwt/create/", CustomTokenObtainPairView.as_view()),
    path("jwt/refresh/", CustomRefreshView.as_view()),
    path("jwt/verify/", CustomTokenVerifyView.as_view()),
    path("logout/", LogoutView.as_view()),
]
