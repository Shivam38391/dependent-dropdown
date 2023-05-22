from django.forms import forms
from formapp.models import Create


class CreateForm(forms.ModelForm):
    """Form definition for Create."""

    class Meta:
        """Meta definition for Createform."""

        model = Create
        fields = "__all__"
