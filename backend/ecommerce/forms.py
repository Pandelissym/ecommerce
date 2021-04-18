from django import forms

class AvailableForm(forms.Form):
    productId = forms.IntegerField()
    amount = forms.IntegerField()