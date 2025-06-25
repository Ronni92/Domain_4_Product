const Producto = require('../models/Producto');

const resolvers = {
    Query: {
        obtenerProducto: async (_, { id }) => {
            return await Producto.findById(id);  // Busca en Elasticsearch
        }
    }
};

module.exports = resolvers;
