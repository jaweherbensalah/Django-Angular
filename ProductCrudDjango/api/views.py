from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import ProduitSerializer, ProduitMiniSerializer
from .models import Produit
from rest_framework.response import Response


class ProduitViewSet(viewsets.ModelViewSet):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer

    def list(self, request, *args, **kwargs):
        produits = Produit.objects.all()
        serializer = ProduitMiniSerializer(produits, many=True)
        return Response(serializer.data)