function openModal() {
    document.getElementById("myModal").style.display = "block";
    loadPilotData(); // Carica i dati del pilota
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function loadPilotData() {
    // Esempio di dati del pilota (da sostituire con dati reali da un API)
    const pilota = {
        nome: "Lewis Hamilton",
        categoria: "F1",
        posizione: 1,
        punti: 197,
        podi: 7,
        vittorie: 4,
        giriInTesta: 52,
        dnf: 1
    };

    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <h2>${pilota.nome} - ${pilota.categoria}</h2>
        <p>Posizione in Classifica: ${pilota.posizione}</p>
        <p>Punti: ${pilota.punti}</p>
        <p>Podi: ${pilota.podi}</p>
        <p>Vittorie: ${pilota.vittorie}</p>
        <p>Giri in Testa: ${pilota.giriInTesta}</p>
        <p>DNF (Non finito): ${pilota.dnf}</p>
    `;
}
