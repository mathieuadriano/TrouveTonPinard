from rest_framework import serializers
from .models import Winery

class WinerySerializer(serializers.ModelSerializer):
    class Meta :
        model = Winery
        fields = '__all__'