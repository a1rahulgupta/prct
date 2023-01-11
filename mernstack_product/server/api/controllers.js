var mongoose = require('mongoose');


userModel = mongoose.model("userModel");
productModel = mongoose.model("productModel");

var dataSaved;


exports.addProduct = (request, response) => {
   console.log(request);
   var productObject = {
      userName : request.body.userName,
      name: request.body.name,
      description: request.body.description,
      productType: request.body.productType
   },
      dataSaved = new productModel(productObject);

   dataSaved.save((err, prouctData) => {
      console.log(err, prouctData);

      if (err) {
         response.json({ code: 201, data: {}, message: "Internal Error" })
      }

      else {
         response.json({ code: 200, data: prouctData, message: "Product Added Successfully" })
      }
   })
}

exports.addUser = (request, response) => {
   console.log(request);
   var userObject = {
      userName: request.body.userName,

   },
      dataSaved = new userModel(userObject);

   dataSaved.save((err, userData) => {
      console.log(err, userData);

      if (err) {
         response.json({ code: 201, data: {}, message: "Internal Error" })
      }

      else {
         response.json({ code: 200, data: userData, message: "User Added Successfully" })
      }
   })
}




exports.deleteProduct = (request, response) => {
   console.log(request.body._id);
   if (!request.body._id) {
      response.json({ code: 401, data: {}, message: "Please Send a Valid Input" })
   }
   else {
      productModel.findOneAndUpdate({ _id: request.body._id }, { $set: { isDeleted: true } },
         (err, data) => {
            if (err) {
               response.json({ code: 201, data: {}, message: "Internal Error" })
            }

            else {
               response.json({ code: 200, data: {}, message: "Product Deleted Successfully" })
            }

         })

   }

}

exports.updateProduct = (request, response) => {
   console.log(request);
   if (!request.body._id) {
      response.json({ code: 401, data: {}, message: "Please Send a Valid Input" })

   }
   else {
      productModel.findOneAndUpdate({ _id: request.body._id }, { $set: request.body },
         (err, data) => {
            if (err) {
               response.json({ code: 201, data: {}, message: "Internal Error" })
            }

            else {
               response.json({ code: 200, data: {}, message: "Product Updated Successfully" })
            }

         })
   }
}

//Api of get all product with aggregrate
exports.getAllProduct = (req, res) => {
   console.log(req.body);
   var count = req.body.count;
   var skip = req.body.count * (req.body.pageSize - 1);
   var condition = {
      "isDeleted": false
   }
   var aggregate = [{
      $match: condition
   }]
   var project = {
      $project: {
         "_id": "$_id",
         "userName" : "$userName",
         "name": "$name",
         "description": "$description",
         "productType": "$productType"

      }
   }

   aggregate.push({
      $skip: skip
   })
   aggregate.push({
      $limit: count
   })
   productModel.aggregate(aggregate).exec((err, data) => {
      console.log(err, data);

      if (err) {
         res.json({ code: 201, data: {}, message: "Internal Error" })
      }

      else {
         res.json({
            code: 200,
            data: data,
            message: "Product Recieved Successfully"
         })
      }

   })

}

exports.getAllUsers = (req, res) => {
   console.log(req.body);
   userModel.find({
   }).exec((err, userData) => {

      console.log(err, userData);

      if (err) {
         res.json({ code: 201, data: {}, message: "Internal Error" })
      }

      else {
         res.json({ code: 200, data: userData, message: "User Found Successfully" })
      }

   })


}


exports.getProductById = (request, response) => {
   console.log(request.params);
   if (!request.params.id) {
      response.json({ code: 401, data: {}, message: "Please Send a Valid Input" })
   }
   else {
      productModel.findById({ _id: request.params.id },
         (err, data) => {
            if (err) {
               response.json({ code: 201, data: {}, message: "Internal Error" })
            }

            else {
               response.json({ code: 200, data: data, message: "Product Retrieved Successfully" })
            }

         })

   }

}



/*exports.getAllProduct = (req, res) => {
   console.log(req.body);
   var count = req.body.count;
   var skip = req.body.count*(req.body.pageSize - 1);
   productModel.find({
      "isDeleted": false
   }).skip(skip).limit(count).exec((err, data) => {

      console.log(err, data);

      if (err) {
         res.json({ code: 201, data: {}, message: "Internal Error" })
      }

      else {
         res.json({ code: 200, data: data, message: "Product Recieved Successfully" })
      }

   })


}*/



