from rest_framework import viewsets
from .serializers import MentalGameResultSerializer
from .models import MentalGameResult

# Create your views here.

class MentalGameView(viewsets.ModelViewSet):
    serializer_class = MentalGameResultSerializer
    queryset = MentalGameResult.objects.all()
