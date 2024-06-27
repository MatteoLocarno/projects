const pilots = [
    { name: "Max Verstappen", image: "path/to/verstappen.png", stats: "Punti: 200, Podi: 10, Vittorie: 8, Giri in Testa: 100, DNF: 1" },
    { name: "Lewis Hamilton", image: "path/to/hamilton.png", stats: "Punti: 195, Podi: 9, Vittorie: 7, Giri in Testa: 90, DNF: 2" },
    { name: "Charles Leclerc", image: "path/to/leclerc.png", stats: "Punti: 180, Podi: 8, Vittorie: 5, Giri in Testa: 80, DNF: 3" },
    // Aggiungi qui gli altri piloti
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


