const express = require('express');
const productRouter = express.Router();
const controllerRouter = express.Router();
const productController = require('../controllers/product.controller');

productRouter.use('/product', controllerRouter);

controllerRouter.get('/listVars', productController.listVars);
controllerRouter.get('/ping', productController.ping);
controllerRouter.post('/createProduct', productController.createProduct);

module.exports = productRouter;