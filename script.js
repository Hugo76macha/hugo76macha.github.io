// Fonction pour calculer les jours écoulés depuis le départ de Discord
function updateDaysCount() {
    const departureDate = new Date("2024-10-07");
    const today = new Date();
    const timeDiff = today - departureDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    document.getElementById("days-count").textContent = daysDiff;
}

// Mettre à jour le compteur chaque seconde (1000 ms)
setInterval(updateDaysCount, 1000);

// Mode sombre / clair
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙 Mode Sombre";
    } else {
        themeToggle.textContent = "☀️ Mode Clair";
    }
});

// Exécuter le compteur initialement pour définir le nombre de jours au chargement
updateDaysCount();
