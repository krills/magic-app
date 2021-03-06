from django.db import models

# Create your models here.

class Card(models.Model):
	name = models.CharField(max_length=120)
	text = models.TextField()
	manaCost = models.CharField(max_length=10)
	convertedManaCost = models.IntegerField()
	colors = models.JSONField()
	colorIdentity = models.JSONField()
	type = models.CharField(max_length=120)
	superTypes = models.JSONField()
	types = models.JSONField()
	subTypes = models.JSONField()
	rarity = models.CharField(max_length=120)
	power = models.IntegerField()
	toughness = models.IntegerField()
	imageUrl = models.CharField(max_length=250)
	rulings = models.JSONField()

	def _str_(self):
		return self.name