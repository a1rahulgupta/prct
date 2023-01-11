const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
userModel = mongoose.model("userModel");

const productController = require("../api/controllers");

router.post('/addUser', productController.addUser);
router.get('/getAllUsers', productController.getAllUsers);

module.exports = router;

