

from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Product, Produit

class ProduitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produit
        fields = ('id','nom', 'prix_unitaire', 'quantite')

class ProduitMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produit
        fields = ('id','nom','prix_unitaire', 'quantite')

#this will serialize our model into json format
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields ='__all__' #serialize all the information of product model

