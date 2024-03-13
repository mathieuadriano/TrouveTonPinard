from rest_framework import serializers

from .models import Wine

from winery.serializers import WinerySerializer

class WineSerializer(serializers.ModelSerializer):
    winery = WinerySerializer()

    class Meta :
        model = Wine
        fields = '__all__'

class PostWineSerializer(serializers.Serializer):
    repas = serializers.CharField()
    plat = serializers.CharField()
    accompagnement = serializers.CharField()
    niveau = serializers.CharField()
    type = serializers.CharField()
    prix = serializers.CharField()