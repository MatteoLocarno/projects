const pilots = [
    { name: "Max Verstappen", image: "path/to/verstappen.png", stats: "Punti: 200, Podi: 10, Vittorie: 8, Giri in Testa: 100, DNF: 1" },
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

