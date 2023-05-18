from django.db import models

class Produit(models.Model):
    nom = models.CharField(max_length=32)
    prix_unitaire = models.FloatField()
    quantite = models.IntegerField()

class Product(models.Model):
    image=models.ImageField(upload_to='uploads/images',blank=True, null=True)
    name = models.CharField(max_length=150, blank=True, null=True)
    price = models.DecimalField(max_digits=7, decimal_places=2,blank=True, null=True)
    desciption = models.TextField(blank=True, null=True)
    category = models.TextField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name


class Snippet(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def body_preview(self):
        return self.body[:50]

