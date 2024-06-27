const pilots = [
    { name: "Max Verstappen", image: "https://example.com/verstappen.png", stats: "Punti: 200, Podi: 10, Vittorie: 8, Giri in Testa: 100, DNF: 1" },
    { name: "Lewis Hamilton", image: "https://example.com/hamilton.png", stats: "Punti: 195, Podi: 9, Vittorie: 7, Giri in Testa: 90, DNF: 2" },
    { name: "Charles Leclerc", image: "https://example.com/leclerc.png", stats: "Punti: 180, Podi: 8, Vittorie: 5, Giri in Testa: 80, DNF: 3" },
    { name: "Sergio Perez", image: "https://example.com/perez.png", stats: "Punti: 175, Podi: 7, Vittorie: 4, Giri in Testa: 70, DNF: 2" },
    { name: "Carlos Sainz", image: "https://example.com/sainz.png", stats: "Punti: 160, Podi: 6, Vittorie: 3, Giri in Testa: 60, DNF: 3" },
    { name: "Lando Norris", image: "https://example.com/norris.png", stats: "Punti: 145, Podi: 5, Vittorie: 2, Giri in Testa: 50, DNF: 2" },
    { name: "George Russell", image: "https://example.com/russell.png", stats: "Punti: 130, Podi: 4, Vittorie: 1, Giri in Testa: 40, DNF: 1" },
    { name: "Esteban Ocon", image: "https://example.com/ocon.png", stats: "Punti: 115, Podi: 3, Vittorie: 1, Giri in Testa: 30, DNF: 2" },
    { name: "Fernando Alonso", image: "https://example.com/alonso.png", stats: "Punti: 100, Podi: 2, Vittorie: 1, Giri in Testa: 20, DNF: 3" },
    { name: "Pierre Gasly", image: "https://example.com/gasly.png", stats: "Punti: 85, Podi: 1, Vittorie: 0, Giri in Testa: 10, DNF: 2" },
    { name: "Yuki Tsunoda", image: "https://example.com/tsunoda.png", stats: "Punti: 70, Podi: 0, Vittorie: 0, Giri in Testa: 5, DNF: 2" },
    { name: "Sebastian Vettel", image: "https://example.com/vettel.png", stats: "Punti: 55, Podi: 0, Vittorie: 0, Giri in Testa: 5, DNF: 1" },
    { name: "Mick Schumacher", image: "https://example.com/schumacher.png", stats: "Punti: 40, Podi: 0, Vittorie: 0, Giri in Testa: 0, DNF: 2" },
    { name: "Nikita Mazepin", image: "https://example.com/mazepin.png", stats: "Punti: 25, Podi: 0, Vittorie: 0, Giri in Testa: 0, DNF: 3" },
    { name: "Valtteri Bottas", image: "https://example.com/bottas.png", stats: "Punti: 10, Podi: 0, Vittorie: 0, Giri in Testa: 0, DNF: 2" },
    { name: "Guanyu Zhou", image: "https://example.com/zhou.png", stats: "Punti: 5, Podi: 0, Vittorie: 0, Giri in Testa: 0, DNF: 1" },
    { name: "Nicholas Latifi", image: "https://example.com/latifi.png", stats: "Punti: 0, Podi: 0, Vittorie: 0, Giri in Testa: 0, DNF: 3" },
    { name: "Alex Albon", image: "https://example.com/albon.png", stats: "Punti: 0, Podi: 0, Vittorie: 0, Giri in Testa: 0, DNF: 2" },
    { name: "Kevin Magnussen", image: "https://example.com/magnussen.png", stats: "Punti: 0, Podi: 0, Vittorie: 0, Giri in Testa: 0, DNF: 2" },
    { name: "Lance Stroll", image: "https://example.com/stroll.png", stats: "Punti: 0, Podi: 0, Vittorie: 0, Giri in Testa: 0, DNF: 2" }
];

document.getElementById("searchBar").addEventListener("keyup", filterPilots);

function filterPilots() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const suggestions = pilots.filter(pilot => pilot.name.toLowerCase().includes(query));
    displaySuggestions(suggestions);
}

function displaySuggestions(suggestions) {
    const suggestionsList = document.getElementById("suggestions");
    suggestionsList.innerHTML = "";
    suggestions.forEach(pilot => {
        const li = document.createElement("li");
        li.textContent = pilot.name;
        li.addEventListener("click", () => displayPilotData(pilot));
        suggestionsList.appendChild(li);
    });
}

function displayPilotData(pilot) {
    document.getElementById("pilotImage").src = pilot.image;
    document.getElementById("pilotName").textContent = pilot.name;
    document.getElementById("pilotStats").textContent = pilot.stats;
    document.getElementById("suggestions").innerHTML = "";
    document.getElementById("searchBar").value = "";
}



