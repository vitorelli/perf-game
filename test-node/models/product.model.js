class Product  {

    constructor(name, price, category, description) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
    }

    static fromReq(req) {
        return new Product(req.body.name,
            req.body.price,
            req.body.category,
            req.body.description);
    }
    
}

module.exports = Product;