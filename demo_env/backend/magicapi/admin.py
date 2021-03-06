from django.contrib import admin
from .models import Card

class CardAdmin(admin.ModelAdmin):
	list_display = (
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

# Register your models here.

admin.site.register(Card, CardAdmin)