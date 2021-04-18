from rest_framework.decorators import api_view
from rest_framework.views import APIView, Response
from ..models import Product
from ..forms import AvailableForm

@api_view()
def isAvailable(request):
    form = AvailableForm(request.GET)

    if not form.is_valid():
        return Response({"Error": "Invalid form"},400)

    productId = form.cleaned_data.get('productId')
    amount = form.cleaned_data.get('amount')

    queryset = Product.objects.filter(id=productId)
    if not queryset.exists():
        return False

    available = queryset[0].amount >= amount
    if available:
        return Response({"Success": "Product is available"}, 202)
    else:
        return Response({"Error": "Product is not available"}, 404)
