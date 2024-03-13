from django.db.models import Q

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
        
class PostWine(APIView):
    def post(self, request):
        serializer_class = PostWineSerializer(data=request.data)

        if serializer_class.is_valid():
            repas = serializer_class.validated_data['repas']
            plat = serializer_class.validated_data['plat']
            accompagnement = serializer_class.validated_data['accompagnement']
            niveau = serializer_class.validated_data['niveau']
            type = serializer_class.validated_data['type']
            prix = serializer_class.validated_data['prix']

            wines = Wine.objects.filter(
                Q(repas__icontains=repas) |
                Q(plat__icontains=plat) |
                Q(accompagnement__icontains=accompagnement) |
                Q(niveau__icontains=niveau) |
                Q(type__icontains=type) |
                Q(prix__icontains=prix)
                ).order_by('-prix')[:5]
            
            if wines.exists():            
                wine_serializer = WineSerializer(wines, many=True)
                data = wine_serializer.data

                return Response(data, status=status.HTTP_200_OK)
            
            else:
                return Response ({"Queryset Result": "No result for this selection."}, status=status.HTTP_404_NOT_FOUND)
        
        return Response({"Network Issue": "A network issue occured."}, status = status.HTTP_400_BAD_REQUEST)
    