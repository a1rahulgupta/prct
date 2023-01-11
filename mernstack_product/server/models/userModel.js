var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    userName : {type:String,required:true,trim:true,minlength:3,unique:true}
}, 
{
    timestamps : true //to specify created date and updated date
})

var userModel = mongoose.model("userModel",userSchema);

module.exports = userModel;