from django.db import models

class Produit(models.Model):
    nom = models.CharField(max_length=32)
    prix_unitaire = models.FloatField()
    quantite = models.IntegerField()