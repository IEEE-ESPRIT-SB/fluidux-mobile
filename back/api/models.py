
from django.db import models
# Create your models here.

class User(models.Model):
    # Define fields of your entity
    name = models.CharField(max_length=255)
    email = models.TextField()
    password = models.CharField(max_length=128, default='default_password')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Valve(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    reference = models.IntegerField()
    
    def __str__(self):
        return f"Valve {self.reference} - User: {self.user.username}"

class Consumption(models.Model):
    
    valve = models.ForeignKey(Valve, on_delete=models.CASCADE)
    body = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Consumption by {self.user.username} - Valve: {self.valve.reference}"

    class Meta:
        ordering = ['-updated']

