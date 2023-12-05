from rest_framework.serializers import ModelSerializer
from .models import User
from .models import Valve, Consumption


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

        
class ValveSerializer(ModelSerializer):
    class Meta:
        model = Valve
        fields = '__all__'


class ConsumptionSerializer(ModelSerializer):
    class Meta:
        model = Consumption
        fields = '__all__'

