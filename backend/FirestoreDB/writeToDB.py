# Contains code and methods to add information to the Firestore Database based
# on different parameters, version 1.0

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import json

cred = credentials.Certificate('backend/FirestoreDB/supportKey.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://stepinbusiness-84184.nam5.firebaseio.com'
    })
datab = firestore.client()
     
def add(businessType, dataType, informationType, specific, specificData) :
    datab.collection(businessType).document(dataType).collection(informationType).document(specific).set(specificData)
    