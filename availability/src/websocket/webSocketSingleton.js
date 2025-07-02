class WebSocketSingleton {
    static instance;

    constructor() {
        if (WebSocketSingleton.instance) {
            return WebSocketSingleton.instance;
        }

        WebSocketSingleton.instance = this;
        this.wsServer = new WebSocket.Server({ port: 8080 });
    }

    getServer() {
        return this.wsServer;
    }
}

module.exports = WebSocketSingleton;
