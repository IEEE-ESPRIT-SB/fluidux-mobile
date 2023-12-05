from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, ValveSerializer, ConsumptionSerializer
from .models import User
from .models import Valve, Consumption
from django.http import HttpResponseNotFound
from django.contrib.auth import authenticate
from django.http import HttpResponse
from rest_framework.response import Response
from django.shortcuts import render
import pickle
import numpy as np  # Assuming you need this for creating the sample_data
# from keras.models import load_model


from django.http import HttpResponse
def home(request):
    return HttpResponse("Welcome to the Sight App!")

@api_view(['GET'])
def getRoutes(request):
    routes = [
    {
        'Endpoint': '/sight/',
        'method': 'GET',
        'body': None,
        'description': 'Returns an array of notes'

    },
    {
        'Endpoint': '/sight/id',
        'method': 'GET',
        'body': None,
        'description': 'Returns a single note object'

    },
    {
        'Endpoint': '/sight/create/',
        'method': 'POST',
        'body': {'body': ""},
        'description': 'creates new note with data sent in post request'

    },
    {
        'Endpoint': '/sight/id/update/',
        'method': 'PUT',
        'body': {'body':""},
        'description': 'Returns an array of notes'

    },
    {
        'Endpoint': '/sight/id/delete/',
        'method': 'DELETE',
        'body': None,
        'description': 'Deletes and exiting note'

    },
    ]
    return Response(routes)


# Views for User model
@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getUser(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createUser(request):
    data = request.data
    # Extract data from the request
    name = data.get('name')
    email = data.get('email')
    password =data.get('password')
    # Create a new user with the extracted data
    user = User.objects.create(
        name=name,
        email=email,
        password=password
    )
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateUser(request, pk):
    data = request.data
    name = data.get('name')
    email = data.get('email')
    password =data.get('password')
    user = User.objects.get(id=pk)
    user = User.objects.create(
        name=name,
        email=email,
        password=password
    )
    serializer = UserSerializer(user, data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteUser(request, pk):
    user = User.objects.get(id=pk)
    user.delete()
    return Response('User was deleted')

# Views for Valve model
@api_view(['GET'])
def getValves(request):
    valves = Valve.objects.all()
    serializer = ValveSerializer(valves, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getValve(request, pk):
    valve = Valve.objects.get(id=pk)
    serializer = ValveSerializer(valve, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createValve(request):
    data = request.data
    user_id = data.get('user')
    ref = data.get('reference')
    try:
        # Retrieve the User object based on the provided user ID
        user = User.objects.get(pk=user_id)
    except User.DoesNotExist:
        return Response({"detail": "User not found"}, status=400)

    valve = Valve.objects.create(user=user, reference=ref)
    serializer = ValveSerializer(valve, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateValve(request, pk):
    data = request.data
    valve = Valve.objects.get(id=pk)
    serializer = ValveSerializer(valve, data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteValve(request, pk):
    valve = Valve.objects.get(id=pk)
    valve.delete()
    return Response('Valve was deleted')

# Views for Consumption model
@api_view(['GET'])
def getConsumptions(request):
    consumptions = Consumption.objects.all()
    serializer = ConsumptionSerializer(consumptions, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getConsumption(request, pk):
    consumptionA = Consumption.objects.get(id=pk)
    serializer = ConsumptionSerializer(consumptionA, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createConsumption(request):
    data = request.data
    valve_id = data.get('valve')

    amount = data.get('body')
    try:
        # Retrieve the User object based on the provided user ID
        valve = Valve.objects.get(pk=valve_id)

    except User.DoesNotExist:
        return Response({"detail": "User not found"}, status=400)

    consumptionA = Consumption.objects.create(
        valve=valve,body=amount
    )
    serializer = ConsumptionSerializer(consumptionA, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateConsumption(request, pk):
    data = request.data

    consumptionA = Consumption.objects.get(id=pk)
    serializer = ConsumptionSerializer(consumptionA, data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteConsumption(request, pk):
    consumptionA = Consumption.objects.get(id=pk)
    consumptionA.delete()
    return Response('Consumption was deleted')

from django.contrib.auth.hashers import check_password
from .models import User  # Import your User model

@api_view(['POST'])
def checkUserCredentials(request):
    data = request.data
    email = data.get('email')
    password = data.get('password')


    try:
        # Attempt to get the user by email
        user = User.objects.get(email=email, password=password)

        # Authentication successful, return user details
        return Response({'authenticated': True, 'user_id': user.id})
    except User.DoesNotExist:
        # User not found
        return HttpResponseNotFound({'authenticated': False, 'message': 'User not found'}, content_type='application/json')

@api_view(['GET'])
def getUserValves(request, user_id):
    try:
        # Attempt to get the user by ID
        user = User.objects.get(id=user_id)

        # Retrieve valves associated with the user
        valves = Valve.objects.filter(user=user)
        serializer = ValveSerializer(valves, many=True)

        return Response({'user_id': user_id, 'valves': serializer.data})
    except User.DoesNotExist:
        # User not found
        return HttpResponseNotFound({'message': 'User not found'}, content_type='application/json')
# import os
# @api_view(['GET'])
# def predict_view(request):
#     try:
#         model = load_model('C:\\Users\\Souid\\Downloads\\new_sight\\new_sight\\sight\\api\\anomaly_model.h5')
#
#         if model is not None:
#             # Assuming your model expects an input with two features
#             sample_data = np.array([[1609788, 20]])  # Reshape to 2D array
#             prediction = model.predict(sample_data)[0]
#             return HttpResponse(f"Prediction: {prediction}")
#         else:
#             return HttpResponse("Model not loaded. Check if the file exists.", status=500)
#     except FileNotFoundError:
#         return HttpResponse("File Not Found")
#     except Exception as e:
#         return HttpResponse(f"Error: {str(e)}")

