const redis = require('redis');
const client = redis.createClient();

client.on('connect', function() {
    console.log('Conectado a Redis');
});

module.exports = client;
