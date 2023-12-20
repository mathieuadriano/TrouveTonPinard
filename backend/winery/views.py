from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import *
from .serializers import *

# Create your views here.
class GetWineries(APIView):
    serializer_class = WinerySerializer

    def get(self, request):
        wines = Winery.objects.all()
        serializer = self.serializer_class(wines, many=True)
        data = serializer.data

        return Response(data, status=status.HTTP_200_OK)