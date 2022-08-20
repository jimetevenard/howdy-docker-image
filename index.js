const http = require('http');
const colors = require('./colors');



// =================================================================

// Port d'écoute du serveur (peut être défini en argument CLI)
const defaultPort = 8080;
const port = process.argv[2] ? parseInt(process.argv[2], 10) : defaultPort;

// Couleur choisie aléatoirement (fait office d'ID d'exécution)
const executionColor = colors[Math.floor(Math.random() * colors.length)];



// =================================================================

console.log(`Starting server on port ${port} in ${executionColor.colorName} `);
console.log(`Visit http://localhost:${port}`);

/**
 * Lancement du serveur http sur le port défini plus haut.
 * Retourne la page hello a toutes les requetes.
 */
http.createServer(function (req, res) {
  const name = process.env.NAME ?? 'Bob';

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(helloPage(name));
  res.end();
}).listen(port);

/**
 * Retourne le HTML de la page hello, avec les bonnes couleurs
 * et la valeur de la variable `name`
 */
function helloPage(name) {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Salut ${name} !</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: ${executionColor.isDark ? executionColor.value : 'midnightblue'};
            }
    
            main {
                margin: 30px auto;
                padding: 30px;
                border: 4px solid ${executionColor.value};
                max-width: 350px;
                text-align: center;
            }

            h1, p {
                margin: 5px;
            }

            .name {
                color: orange;
            }

            .exp {
                font-size: 0.8rem;
                margin-bottom: 2.5em;
            }

            code {
                background-color: beige;
                padding: 1px;
                font-weight: bold;
            }

            .color code {
                background-color: ${executionColor.value};
                color: ${executionColor.isDark ? 'white' : 'midnightblue'};
                font-size: 1.5em;
                padding: 5px 10px;
            }
        </style>
    </head>
    
    <body>
        <main>
            <h1>Salut, <span class="name">${name}</span> !</h1>
            <p class="exp">Salutation basée sur la variable d'environnement <code>$NAME</code></p>
            <p class="color"><code>${executionColor.colorName}</code></p>
        </main>
    
    </body>
    
    </html>`;
}