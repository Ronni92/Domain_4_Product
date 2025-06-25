const WebSocket = require('ws');
const redis = require('redis');
const redisClient = require('./redisClient');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`Mensaje recibido: ${message}`);
        redisClient.set('disponibilidad', message); // Guardar en Redis
        ws.send('Disponibilidad actualizada');
    });
});

console.log('Servidor WebSocket iniciado en ws://localhost:8080');
