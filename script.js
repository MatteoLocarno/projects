// script.js

function fetchF1Data() {
    fetch('/api/f1') // Assicurati che il percorso sia corretto per il tuo endpoint API
        .then(response => response.json())
        .then(data => {
            displayStandings(data);
        })
        .catch(error => {
            console.error('Errore nel caricamento dei dati F1:', error);
        });
}

function fetchMotoGPData() {
    fetch('/api/motogp') // Assicurati che il percorso sia corretto per il tuo endpoint API
        .then(response => response.json())
        .then(data => {
            displayStandings(data);
        })
        .catch(error => {
            console.error('Errore nel caricamento dei dati MotoGP:', error);
        });
}

function displayStandings(data) {
    const standingsList = document.getElementById('standings');
    standingsList.innerHTML = '';
    data.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${item.flag}" alt="${item.name} flag" class="flag"> <a href="${item.wiki}" target="_blank">${item.position}. ${item.name}</a> - ${item.points} punti`;
        standingsList.appendChild(li);
    });
}
