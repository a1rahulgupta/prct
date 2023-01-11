const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

require('../models/productModel')
require('../models/userModel')


var url = "mongodb://localhost:27017/productdb";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology : true
}, function (err) {
    if(err)
    console.log("Connection Failed",err);

    else{
        console.log("Database Connected Successfully");
    }
} )
