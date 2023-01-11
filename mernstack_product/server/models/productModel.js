var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = Schema({
    userName : {type:String},
    name : {type:String},
    description : {type:String},
    productType : {type:String},
    isDeleted : {type:Boolean, default:false}
}, 
{
    timestamps : true //to specify created date and updated date
})

var productModel = mongoose.model("productModel",productSchema);

module.exports = productModel;