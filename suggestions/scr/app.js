const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { Client } = require('@elastic/elasticsearch');
const productSuggestionResolver = require('./resolvers/suggestionResolver');

const client = new Client({ node: 'http://localhost:9200' });

const typeDefs = gql`
  type Product {
    id: ID
    name: String
    description: String
  }

  type Query {
    getSuggestions(category: String): [Product]
  }
`;

const resolvers = productSuggestionResolver(client);

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log('Product Suggestion service running at http://localhost:4000/graphql');
});
