const Product = require('../models/product.model');
const db = require('../pool');

exports.listVars = async function listVars (req, res, next) {
    return res.json(process.env);
}

exports.ping = async function ping (req, res, next) {
    return res.json("OK");
}

exports.createProduct = async function createProduct (req, res, next) {
    
    try{
        const client = await db.getPool().connect();

        try{
            const model = Product.fromReq({body:req.body});
        
            await client.query("INSERT INTO test.perftest (\"name\", price, category, description)VALUES($1, $2, $3, $4);", [
                model.name,
                model.price,
                model.category,
                model.description
            ]);
    
        } finally{
            client.release();
        }
    
        res.end();
    } catch {
        res.status(400).end();
    }
}