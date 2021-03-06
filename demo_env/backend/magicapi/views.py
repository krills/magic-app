from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import CardSerializer
from .models import Card
import json
import requests

# Create your views here.

class CardView(viewsets.ModelViewSet):
	serializer_class = CardSerializer
	queryset = Card.objects.all()

	magicApiUrl = 'http://api.magicthegathering.io/v1/'

	def list(self, response):
		cards = requests.get(
			self.magicApiUrl + 'cards',
			params = {
				'page': self.request.GET.get('page', default=1)
			}
		)
		return Response(cards.json())

	def retrieve(self, response, *args, **kwargs):
		return Response('hello get')

	@action(detail=False)
	def custom(self, response):
		return Response('hello custom')