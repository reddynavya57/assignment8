const express = require ("express");
const {createProductData, getProductData, productByCategory, productByColorSize, deleteProducts, topFivePrices, nthHighestPrice} 
= require("./controller");
const router = express.Router();


router.post("/create-product",createProductData);
router.get("/get-products",getProductData);
router.get("/get-bycategory",productByCategory);
router.get("/get-bycolorsize",productByColorSize);
router.delete("/delete-product",deleteProducts);
router.get("/get-topfive",topFivePrices);
router.get("/get-nth/:nthprice",nthHighestPrice);

module.exports = router;