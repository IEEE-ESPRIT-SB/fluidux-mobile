from django.urls import path
from . import views
from .views import checkUserCredentials
from .views import getUserValves


urlpatterns = [
    path('', views.home, name='home'),
    # Paths for User model
    path('users/', views.getUsers),
    path('users/create/', views.createUser),
    path('users/<str:pk>/update/', views.updateUser),
    path('users/<str:pk>/delete/', views.deleteUser),
    path('users/<str:pk>/', views.getUser),

    # Paths for Valve model
    path('valves/', views.getValves),
    path('valves/create/', views.createValve),
    path('valves/<str:pk>/update/', views.updateValve),
    path('valves/<str:pk>/delete/', views.deleteValve),
    path('valves/<str:pk>/', views.getValve),

    # Paths for Consumption model
    path('consumptions/', views.getConsumptions),
    path('consumptions/create/', views.createConsumption),
    path('consumptions/<str:pk>/update/', views.updateConsumption),
    path('consumptions/<str:pk>/delete/', views.deleteConsumption),
    path('consumptions/<str:pk>/', views.getConsumption),

    #CheckingUserExistence
     path('check_credentials/', checkUserCredentials, name='check-user-credentials'),
     #checkifuserhasvalve
     path('//<int:user_id>/valves/', getUserValves, name='user_valves'),
     #AI
    path('predict/', views.predict_view, name='predict_view'),
]
