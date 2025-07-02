const redisClient = require('../redis/redisClient');

module.exports = (ws) => {
    ws.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`);
        // Almacenamos el mensaje recibido en Redis
        redisClient.set('availability', message);
        
        // Emitir un mensaje de vuelta al cliente
        ws.send('Mensaje procesado y almacenado en Redis');
    });

    ws.on('close', () => {
        console.log('Cliente desconectado');
    });
};
