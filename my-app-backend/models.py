from django.db import models

# Create your models here.
class MentalGameResult(models.Model):
    name = models.CharField(max_length=120, null=True, blank=True)
    score = models.IntegerField()
    questions = models.IntegerField()
    speed=models.DecimalField(max_digits=5, decimal_places=2)
    time = models.DateTimeField(auto_now=True)
    

    