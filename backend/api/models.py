from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Bill(models.Model):
    item = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=3)
    count = models.IntegerField()
    cost = models.DecimalField(max_digits=10, decimal_places=3)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="bills")

    def __str__(self):
        return self.title
