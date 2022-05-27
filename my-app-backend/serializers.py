from rest_framework import serializers
from .models import MentalGameResult 

class MentalGameResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentalGameResult
        fields = ('name','score', 'questions', 'speed', 'time')
