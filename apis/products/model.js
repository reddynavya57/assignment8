const mongoose = require("mongoose");
let ObjectId = mongoose.Schema.Types.ObjectId;

let productSchema = new mongoose.Schema ({
    categoryId: {type: ObjectId, ref:'category'},
    name: {type: String},
    price: {type: Number},
    color: {type: String},
    size: {type: String}
});

exports.productModel = mongoose.model("product", productSchema);

