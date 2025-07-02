const WebSocket = require('ws');
const config = require('./config');
const redisClient = require('./redis/redisClient');
const availabilityController = require('./controllers/availabilityController');

// Crear servidor WebSocket
const wss = new WebSocket.Server({ port: config.websocket.port });

wss.on('connection', (ws) => {
    console.log('Cliente conectado');
    // Llamamos al controlador para manejar la interacción WebSocket
    availabilityController(ws);
});

console.log(`Servidor WebSocket corriendo en el puerto ${config.websocket.port}`);
