from django.db import models
from django.utils.timezone import now
from realtors.models import Realtor

class Listing(models.Model):
    class SaleType(models.TextChoices):
        FORE_SALE = "For sale"
        FOR_RENT = "For Rent"
        
    class HomeType(models.TextChoices):
        HOUSE = 'House'
        CONDO = "Condo"
        
    realtor = models.ForeignKey(Realtor, on_delete=models.DO_NOTHING)
    slug = models.CharField(max_length=200, unique=True)
    title = models.CharField(max_length=150)
    addess = models.CharField(max_length=150)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    saletype = models.CharField(max_length=50, choices=SaleType.choices, default=SaleType.FORE_SALE)
    price = models.IntegerField()
    bedrooms = models.IntegerField()
    bathrooms = models.DecimalField(max_digits=2, decimal_places=1)
    hometype = models.CharField(max_length=50, choices=HomeType.choices, default=HomeType.HOUSE)
    sqrft = models.IntegerField()
    open_house = models.BooleanField(default=False)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d')
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(default=now, blank=True)
    
    
    def __str__(self):
        return self.title


    
   

# Create your models here.
