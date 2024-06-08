document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('terminal-input');
    const output = document.querySelector('.output');

    const commands = {
        help: 'Voici toutes les commandes disponibles: help, infos, projets, contact',
        infos: 'Je suis un passonié d\'infromatique depuis 2023 quand je suis arriver dans cette communauté. \n J\'aime bien le dev, je fais seulement du Js. Je suis aussie dans quelques projets comme un DmBot afin que mes clients puissent dm all grace as un token de bot discord.',
        projets: 'Mon projet de rêve est de créer des bots certifiers =). \n Pour l\'instant je suis juste entrain de faire mon propre NdProtect.',
        contact: 'Discord: Hugo76_macha'
    };

    const initialText = [
        'Bievenue sur mon portofolio !',
        'Marques help pour la liste des commandes.'
    ];

    // Function to simulate typing effect
    function typeText(element, text, delay = 100, callback) {
        let i = 0;
        const interval = setInterval(() => {
            element.textContent += text[i];
            i++;
            if (i === text.length) {
                clearInterval(interval);
                if (callback) callback();
            }
        }, delay);
    }

    // Display initial text with typing effect
    function displayInitialText() {
        let i = 0;
        function showNextLine() {
            if (i < initialText.length) {
                const newLine = document.createElement('p');
                output.appendChild(newLine);
                typeText(newLine, initialText[i], 50, showNextLine);
                i++;
            } else {
                // Enable input after initial text is displayed
                input.disabled = false;
                input.focus();
            }
        }
        showNextLine();
    }

    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const command = input.value.trim();
            input.value = '';

            if (commands[command]) {
                addOutput(commands[command]);
            } else {
                addOutput(`Command not found: ${command}`);
            }
        }
    });

    function addOutput(text) {
        const newLine = document.createElement('p');
        output.appendChild(newLine);
        typeText(newLine, text, 50);
        output.scrollTop = output.scrollHeight;
    }

    // Clear output and disable input initially
    output.innerHTML = '';
    input.disabled = true;

    // Start displaying the initial text
    displayInitialText();
});
