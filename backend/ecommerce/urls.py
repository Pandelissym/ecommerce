from django.urls import path, include
from .views.products_view import ProductView, ProductListView
from .views.add_to_cart_view import isAvailable

urlpatterns = [
    path('products', ProductListView.as_view()),
    path('products/<int:id>', ProductView.as_view()),
    path('is-available', isAvailable)
]
