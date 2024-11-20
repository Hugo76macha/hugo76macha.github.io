const http = require('http');
const fs = require('fs');
const path = require('path');

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath == './') {
        filePath = './index.html'; // Par défaut, servir index.html
    }

    const extname = path.extname(filePath);
    let contentType = 'text/html';

    // Déterminer le type de contenu basé sur l'extension du fichier
    if (extname === '.js') {
        contentType = 'application/javascript';
    } else if (extname === '.css') {
        contentType = 'text/css';
    }

    // Lire le fichier et le renvoyer en réponse
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Erreur: Fichier non trouvé');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Écouter sur un port local
const PORT = 8080;
const HOST = '192.168.1.27'; // Permet d'écouter sur toutes les interfaces réseau (y compris ton IP locale)

server.listen(PORT, HOST, () => {
    console.log(`Serveur en cours d'exécution sur http://${HOST}:${PORT}`);
});
