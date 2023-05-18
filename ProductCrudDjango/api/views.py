from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import ProduitSerializer, ProduitMiniSerializer,ProductSerializer
from .models import *
from rest_framework.response import Response


class ProduitViewSet(viewsets.ModelViewSet):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer

    def list(self, request, *args, **kwargs):
        produits = Produit.objects.all()
        serializer = ProduitMiniSerializer(produits, many=True)
        return Response(serializer.data)


#create a class product view
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions
class ProductView(viewsets.ModelViewSet):
    #queryset will bring data from database
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes= [permissions.AllowAny] 




#********************add filter
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.urls import reverse
from .models import Snippet
from django.views import View
from django.views.generic import ListView, DetailView
from .filters import SnippetFilter


class SnippetListView(ListView):
    model = Snippet
    template_name = 'snippets/snippet_list.html'
    def get_context_data(self, **kwargs):
        context=super().get_context_data(**kwargs)
        context['filter']=SnippetFilter(self.request.GET, queryset=self.get_queryset())
   
        return context

class SnippetDetailView(DetailView):
    model = Snippet
    template_name = 'snippets/snippet_detail.html'

