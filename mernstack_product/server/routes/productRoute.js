const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
productModel = mongoose.model("productModel");

const productController = require("../api/controllers");

router.post('/addProduct', productController.addProduct);
router.post('/getAllProduct', productController.getAllProduct);
router.post('/deleteProduct', productController.deleteProduct);
router.post('/updateProduct', productController.updateProduct);
router.get('/getProductById/:id', productController.getProductById);
module.exports = router;

