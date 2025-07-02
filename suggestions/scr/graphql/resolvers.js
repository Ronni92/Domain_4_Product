const { CategorySuggestionStrategy, PriceRangeSuggestionStrategy } = require('../strategies/SuggestionStrategy');

module.exports = {
    Query: {
        getSuggestions: async (_, { category }) => {
            let products = [
                { id: 1, name: "Laptop", description: "A high-performance laptop", price: 1000, category: "electronics" },
                { id: 2, name: "Shirt", description: "A comfortable cotton shirt", price: 20, category: "clothing" }
            ];
            let strategy;

            if (category === "electronics") {
                strategy = new CategorySuggestionStrategy();
            } else if (category === "affordable") {
                strategy = new PriceRangeSuggestionStrategy();
            }

            return strategy.getSuggestions(products);
        }
    }
};
