from django.urls import path, include
from .views import ProductView, ProductListView

urlpatterns = [
    path('products', ProductListView.as_view()),
    path('products/<int:id>', ProductView.as_view())
]
