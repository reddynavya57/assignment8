const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/node-training", {}, (err) => {
  if (err) {
    console.log("unable to connect database");
  } else {
    console.log("DB connection created");
  }
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

app.use("/categories",require("./apis/categories/routes"));
app.use("/products",require("./apis/products/routes"));



app.listen(5005,() => {
    console.log("Port number running on local host:5005");
})
