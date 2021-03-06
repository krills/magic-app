from rest_framework import serializers
from .models import Card

class CardSerializer(serializers.ModelSerializer):
	class Meta:
		model = Card
		fields = (
			'name',
			'text',
			'manaCost',
			'convertedManaCost',
			'colors',
			'colorIdentity',
			'type',
			'superTypes',
			'types',
			'subTypes',
			'rarity',
			'power',
			'toughness',
			'imageUrl',
			'rulings',
		)