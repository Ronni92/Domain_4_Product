
module.exports = (client) => ({
  Query: {
    getSuggestions: async (_, { category }) => {
      const { body } = await client.search({
        index: 'products',
        body: {
          query: {
            match: { category }
          }
        }
      });
      return body.hits.hits.map(hit => hit._source);
    }
  }
});
