import requests
from bs4 import BeautifulSoup
import json

def fetch_f1_standings():
    url = "https://it.wikipedia.org/wiki/Campionato_mondiale_di_Formula_1_2024"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    standings = []
    # Logica di parsing per estrarre i dati della classifica
    # Esempio di come aggiungere i dati alla lista standings
    # standings.append({"position": 1, "name": "Max Verstappen", "points": 219, "flag": "path/to/netherlands.png", "wiki": "https://en.wikipedia.org/wiki/Max_Verstappen"})
    return standings
def fetch_motogp_standings():
    url = "https://it.wikipedia.org/wiki/Motomondiale_2024"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    standings = []
    # Logica di parsing per estrarre i dati della classifica
    # Esempio di come aggiungere i dati alla lista standings
    # standings.append({"position": 1, "name": "Jorge Martín", "points": 171, "flag": "path/to/spain.png", "wiki": "https://en.wikipedia.org/wiki/Jorge_Martín"})
    return standings

f1_standings = fetch_f1_standings()
motogp_standings = fetch_motogp_standings()

with open('f1_standings.json', 'w') as f:
    json.dump(f1_standings, f)

with open('motogp_standings.json', 'w') as f:
    json.dump(motogp_standings, f)
