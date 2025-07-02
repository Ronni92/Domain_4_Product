class Product {
    constructor(id, name, description, price, category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }

    static fromElasticsearch(hit) {
        return new Product(
            hit._id,
            hit._source.name,
            hit._source.description,
            hit._source.price,
            hit._source.category
        );
    }
}

module.exports = Product;
