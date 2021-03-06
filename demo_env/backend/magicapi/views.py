from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import CardSerializer
from .models import Card
import json

# Create your views here.

class CardView(viewsets.ModelViewSet):
    serializer_class = CardSerializer
    queryset = Card.objects.all()

    def list(self, response):
    	return Response(json.dumps([]))