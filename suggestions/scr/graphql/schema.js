const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        category: String
    }

    type Query {
        getSuggestions(category: String): [Product]
    }
`;

module.exports = typeDefs;
