// Funzione per mostrare la classifica della Formula 1
function showF1Standings() {
    fetch('f1_standings.json')  // Assicurati che il nome del file sia corretto
        .then(response => response.json())
        .then(data => displayStandings(data))
        .catch(error => console.error('Errore nel caricamento dei dati:', error));
}

// Funzione per mostrare la classifica del MotoGP
function showMotoGPStandings() {
    fetch('motogp_standings.json')  // Assicurati che il nome del file sia corretto
        .then(response => response.json())
        .then(data => displayStandings(data))
        .catch(error => console.error('Errore nel caricamento dei dati:', error));
}

// Funzione per visualizzare le classifiche
function displayStandings(data) {
    const standingsTable = document.getElementById('standings-table');

    // Pulizia della tabella precedente, se presente
    standingsTable.innerHTML = '';

    // Creazione dell'intestazione della tabella
    const headerRow = document.createElement('tr');
    for (let key in data[0]) {
        if (key !== 'flag' && key !== 'wiki') {  // Escludi flag e wiki dalle intestazioni
            const th = document.createElement('th');
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1);  // Formatta il testo dell'intestazione
            headerRow.appendChild(th);
        }
    }
    standingsTable.appendChild(headerRow);

    // Creazione delle righe per ogni pilota
    data.forEach(pilot => {
        const row = document.createElement('tr');
        for (let key in pilot) {
            if (key !== 'flag' && key !== 'wiki') {  // Escludi flag e wiki dalle colonne
                const cell = document.createElement('td');
                if (key === 'name') {
                    // Se il campo è 'name', aggiungi la bandiera del paese davanti al nome
                    const flagImg = document.createElement('img');
                    flagImg.src = pilot.flag;
                    flagImg.alt = pilot.name;
                    flagImg.style.width = '20px';  // Dimensioni dell'immagine della bandiera
                    cell.appendChild(flagImg);
                    cell.appendChild(document.createTextNode(' ' + pilot[key]));
                } else {
                    cell.textContent = pilot[key];
                }
                row.appendChild(cell);
            }
        }
        standingsTable.appendChild(row);
    });
}
