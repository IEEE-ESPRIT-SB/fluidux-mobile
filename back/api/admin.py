from django.contrib import admin
from .models import User, Valve, Consumption
# Register your models here.
admin.site.register(Valve)
admin.site.register(Consumption)
