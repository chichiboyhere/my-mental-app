from django.contrib import admin
from .models import MentalGameResult
# Register your models here.


class MentalAdmin(admin.ModelAdmin):
    list_display = ('score', 'questions', 'speed', 'time')

# Register your models here.

admin.site.register(MentalGameResult, MentalAdmin)
