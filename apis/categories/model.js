const mongoose = require("mongoose");

let categorySchema = new mongoose.Schema ({
    category: {type: String}
});

exports.categoryModel = mongoose.model("category",categorySchema);

