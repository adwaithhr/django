from django.db import models

class Bills(models.Model):
    expense = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=3)
    count = models.IntegerField()
