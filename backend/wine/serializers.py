from rest_framework import serializers

from .models import Wine

from winery.serializers import WinerySerializer

class WineSerializer(serializers.ModelSerializer):
    winery = WinerySerializer()

    class Meta :
        model = Wine
        fields = '__all__'