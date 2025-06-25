const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schema/productoSchema');
const resolvers = require('./graphql/resolvers/productoResolver');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('elasticsearch://localhost:9200');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Servidor GraphQL en ${url}`);
});
