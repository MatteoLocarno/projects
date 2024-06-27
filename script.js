const f1Standings = [
    { position: 1, name: "Max Verstappen", points: 219 },
    { position: 2, name: "Lando Norris", points: 150 },
    { position: 3, name: "Charles Leclerc", points: 148 },
    { position: 4, name: "Carlos Sainz Jr.", points: 116 },
    { position: 5, name: "Sergio Pérez", points: 111 },
    { position: 6, name: "Oscar Piastri", points: 87 },
    { position: 7, name: "George Russell", points: 81 },
    { position: 8, name: "Lewis Hamilton", points: 70 },
    { position: 9, name: "Fernando Alonso", points: 41 },
    { position: 10, name: "Yuki Tsunoda", points: 19 },
    { position: 11, name: "Lance Stroll", points: 17 },
    { position: 12, name: "Daniel Ricciardo", points: 9 },
    { position: 13, name: "Oliver Bearman", points: 6 },
    { position: 14, name: "Nico Hülkenberg", points: 6 },
    { position: 15, name: "Pierre Gasly", points: 5 },
    { position: 16, name: "Esteban Ocon", points: 3 },
    { position: 17, name: "Alexander Albon", points: 2 },
    { position: 18, name: "Kevin Magnussen", points: 1 },
    { position: 19, name: "Zhou Guanyu", points: 0 },
    { position: 20, name: "Valtteri Bottas", points: 0 },
    { position: 21, name: "Logan Sargeant", points: 0 }
];

const motoGpStandings = [
    { position: 1, name: "Jorge Martín", points: 171 },
    { position: 2, name: "Francesco Bagnaia", points: 153 },
    { position: 3, name: "Marc Márquez", points: 136 },
    { position: 4, name: "Enea Bastianini", points: 114 },
    { position: 5, name: "Pedro Acosta", points: 101 },
    { position: 6, name: "Maverick Viñales", points: 100 },
    { position: 7, name: "Brad Binder", points: 85 },
    { position: 8, name: "Aleix Espargaró", points: 82 },
    { position: 9, name: "Fabio Di Giannantonio", points: 74 },
    { position: 10, name: "Álex Márquez", points: 51 },
    { position: 11, name: "Marco Bezzecchi", points: 45 },
    { position: 12, name: "Raúl Fernández", points: 32 },
    { position: 13, name: "Fabio Quartararo", points: 32 },
    { position: 14, name: "Franco Morbidelli", points: 31 },
    { position: 15, name: "Miguel Oliveira", points: 31 },
    { position: 16, name: "Jack Miller", points: 27 },
    { position: 17, name: "Augusto Fernández", points: 13 },
    { position: 18, name: "Joan Mir", points: 13 },
    { position: 19, name: "Johann Zarco", points: 9 },
    { position: 20, name: "Álex Rins", points: 8 },
    { position: 21, name: "Takaaki Nakagami", points: 8 },
    { position: 22, name: "Daniel Pedrosa", points: 7 },
    { position: 23, name: "Luca Marini", points: 0 },
    { position: 24, name: "Stefan Bradl", points: 0 },
    { position: 25, name: "Pol Espargaró", points: 0 },
    { position: 26, name: "Lorenzo Savadori", points: 0 }
];

function loadStandings(sport) {
    let standings;
    let title;
    if (sport === 'f1') {
        standings = f1Standings;
        title = 'Classifica Formula 1 2024';
    } else if (sport === 'motogp') {
        standings = motoGpStandings;
        title = 'Classifica Moto GP 2024';
    }

    document.getElementById('standingsTitle').innerText = title;

    const tbody = document.getElementById('standingsTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    standings.forEach(driver => {
        const row = document.createElement('tr');
        if (driver.position === 1) {
            row.className = 'gold';
        } else if (driver.position === 2) {
            row.className = 'silver';
        } else if (driver.position === 3) {
            row.className = 'bronze';
        }
        const positionCell = document.createElement('td');
        const nameCell = document.createElement('td');
        const pointsCell = document.createElement('td');

        positionCell.textContent = driver.position;
        nameCell.textContent = driver.name;
        pointsCell.textContent = driver.points;

        row.appendChild(positionCell);
        row.appendChild(nameCell);
        row.appendChild(pointsCell);
        tbody.appendChild(row);
    });

    document.getElementById('standingsContainer').style.display = 'block';
}
