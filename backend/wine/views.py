from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import *
from .serializers import *

# Create your views here.
class GetWines(APIView):
    serializer_class = WineSerializer

    def get(self, request):
        wines = Wine.objects.all()
        serializer = self.serializer_class(wines, many=True)
        data = serializer.data

        return Response(data, status=status.HTTP_200_OK)
    
class GetWeeklyWines(APIView):
    serializer_class = WineSerializer

    def get(self, request):
        weekly_wines = Wine.objects.filter(weekly_wine=True)

        if weekly_wines is not None:
            serializer = self.serializer_class(weekly_wines, many=True)
            data = serializer.data

            return Response(data, status=status.HTTP_200_OK)
        else :
            return Response({"Message": "No weekly wine found."}, status=status.HTTP_404_NOT_FOUND)