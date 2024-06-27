// Dati dei piloti di F1
const f1Data = [
    { position: 1, name: "Max Verstappen", points: 219, flag: "url-to-flag-image", wiki: "https://en.wikipedia.org/wiki/Max_Verstappen" },
    // Aggiungi qui gli altri piloti di F1
];

// Dati dei piloti di MotoGP
const motogpData = [
    { position: 1, name: "Jorge Martín", points: 171, flag: "url-to-flag-image", wiki: "https://en.wikipedia.org/wiki/Jorge_Mart%C3%ADn_(motorcyclist)" },
    // Aggiungi qui gli altri piloti di MotoGP
];

// Funzione per visualizzare le classifiche F1
function displayF1Standings() {
    const f1StandingsList = document.getElementById('f1-standings');
    f1StandingsList.innerHTML = '';
    f1Data.forEach(pilot => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${pilot.flag}" alt="${pilot.name} flag" class="flag"> <a href="${pilot.wiki}" target="_blank">${pilot.position}. ${pilot.name}</a> - ${pilot.points} punti`;
        f1StandingsList.appendChild(li);
    });
}

// Funzione per visualizzare le classifiche MotoGP
function displayMotoGPStandings() {
    const motogpStandingsList = document.getElementById('motogp-standings');
    motogpStandingsList.innerHTML = '';
    motogpData.forEach(pilot => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${pilot.flag}" alt="${pilot.name} flag" class="flag"> <a href="${pilot.wiki}" target="_blank">${pilot.position}. ${pilot.name}</a> - ${pilot.points} punti`;
        motogpStandingsList.appendChild(li);
    });
}

// Chiamata alla funzione per visualizzare la classifica F1 al caricamento della pagina
displayF1Standings();

// Chiamata alla funzione per visualizzare la classifica MotoGP al caricamento della pagina
displayMotoGPStandings();
