function fetchF1Data() {
    fetch('/api/f1')
        .then(response => response.json())
        .then(data => {
            displayStandings(data);
        });
}

function fetchMotoGPData() {
    fetch('/api/motogp')
        .then(response => response.json())
        .then(data => {
            displayStandings(data);
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
