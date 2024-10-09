const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Kubernetes</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    color: #333;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    text-align: center;
                    background-color: #fff;
                    padding: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    border-radius: 10px;
                    max-width: 600px;
                }
                h1 {
                    color: #326ce5;
                }
                p {
                    font-size: 18px;
                    line-height: 1.6;
                    text-align: justify;
                }
                .highlight {
                    color: #326ce5;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>¿Qué es Kubernetes?</h1>
                <p>
                    <span class="highlight">Kubernetes</span> es una plataforma de código abierto que se utiliza para automatizar el despliegue, la escalabilidad y la gestión de aplicaciones <span class="highlight">contenedorizadas</span>. 
                    Permite administrar clusters de máquinas y coordinar la ejecución de contenedores de manera eficiente.
                </p>
                <p>
                    Kubernetes proporciona un <span class="highlight">sistema de orquestación</span> para gestionar los contenedores, lo que significa que facilita la administración del ciclo de vida de las aplicaciones. 
                    Entre sus funcionalidades más importantes están la <span class="highlight">escalabilidad automática</span> de aplicaciones, el <span class="highlight">balanceo de carga</span> entre los servicios, 
                    y la <span class="highlight">autoreparación</span> de contenedores que fallan o dejan de responder.
                </p>
                <p>
                    Está diseñado para manejar aplicaciones en entornos de producción, ofreciendo <span class="highlight">alta disponibilidad</span> y <span class="highlight">resiliencia</span>, lo que lo convierte 
                    en una herramienta esencial para implementar aplicaciones modernas basadas en microservicios.
                </p>
            </div>
        </body>
        </html>
    `);
});

app.listen(8080, '0.0.0.0');
console.log("Aplicación ejecutándose en http://0.0.0.0:8080");
