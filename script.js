let password = "";

// Fonction pour simuler l'effet de frappe dans le terminal
function typeWriter(message, element, delay) {
    let i = 0;
    const speed = 50; // Vitesse de frappe en millisecondes

    // Fonction pour ajouter chaque caractère à la fois
    function type() {
        if (i < message.length) {
            element.textContent += message.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    // Démarrer l'effet de frappe
    setTimeout(type, delay);
}

// Fonction pour ajouter du texte à la simulation de la console
function logToConsole(message) {
    const consoleDiv = document.getElementById('console');
    const newMessage = document.createElement('div');
    consoleDiv.appendChild(newMessage);

    // Ajouter l'effet de frappe sur chaque message
    typeWriter(message, newMessage, 1000);

    consoleDiv.scrollTop = consoleDiv.scrollHeight;  // Faire défiler la console vers le bas
}

// Fonction pour simuler un délai réaliste (dynamique) entre les étapes
function simulateStep(message, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            logToConsole(message);
            resolve();
        }, delay);
    });
}

// Fonction de piratage simulé avec étapes et échecs aléatoires
async function startHacking() {
    const input = document.getElementById("passwordInput").value;
    if (!input) {
        logToConsole("Erreur : Mot de passe vide. Veuillez entrer un mot de passe.");
        return;
    }
    password = input; // Sauvegarde du mot de passe donné

    logToConsole("Tentative de piratage en cours...");
    
    // Étape 1 : Connexion au serveur distant
    await simulateStep("Connexion au serveur distant...", 3000);
    
    // Étape 2 : Tentative d'injection dans le réseau
    await simulateStep("Tentative d'injection dans le réseau...", 4000);

    // Étape 3 : Analyse du réseau
    await simulateStep("Analyse des systèmes en cours... Recherche de vulnérabilités", 5000);
    
    // Étape 4 : Simulation d'un échec temporaire
    await simulateStep("Erreur ! Impossible d'injecter le code dans le réseau.", 3000);
    await simulateStep("Nouvelle tentative d'injection...", 2000);

    // Étape 5 : Injection réussie
    await simulateStep("Injection réussie dans le réseau", 4000);

    // Étape 6 : Accès aux fichiers sécurisés
    await simulateStep("Accès aux fichiers sécurisés en cours...", 6000);

    // Étape 7 : Recherche du mot de passe
    await simulateStep("Décryptage des mots de passe... Veuillez patienter.", 7000);

    // Étape 8 : Simulation d'un autre échec
    await simulateStep("Erreur : Impossible de déchiffrer les données. Tentative de correction...", 5000);
    await simulateStep("Correction terminée. Décryptage du mot de passe en cours...", 4000);

    // Étape 9 : Réussite de la découverte du mot de passe
    await simulateStep("Mot de passe trouvé : " + password, 3000);

    // Étape 10 : Confirmation de la réussite
    await simulateStep("Connexion sécurisée réussie. Accès complet au système.", 5000);
    await simulateStep("Processus terminé. Vous êtes maintenant connecté.", 2000);
}
