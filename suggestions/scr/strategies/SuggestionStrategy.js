class SuggestionStrategy {
    getSuggestions(products) {
        // Definir la lógica para obtener recomendaciones de productos
    }
}

class CategorySuggestionStrategy extends SuggestionStrategy {
    getSuggestions(products) {
        // Lógica para obtener productos basados en la categoría
        return products.filter(product => product.category === "electronics");
    }
}

class PriceRangeSuggestionStrategy extends SuggestionStrategy {
    getSuggestions(products) {
        // Lógica para obtener productos basados en el rango de precio
        return products.filter(product => product.price >= 20 && product.price <= 100);
    }
}

module.exports = {
    CategorySuggestionStrategy,
    PriceRangeSuggestionStrategy
};
