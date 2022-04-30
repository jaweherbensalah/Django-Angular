

from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Produit

class ProduitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produit
        fields = ('id','nom', 'prix_unitaire', 'quantite')

class ProduitMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produit
        fields = ('id','nom','prix_unitaire', 'quantite')