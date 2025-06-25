const { gql } = require('apollo-server');

const typeDefs = gql`
    type Producto {
        id: String
        nombre: String
        precio: Float
    }

    type Query {
        obtenerProducto(id: String!): Producto
    }
`;

module.exports = typeDefs;
