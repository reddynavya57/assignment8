const express = require ("express");
const {createCategoryData, getCategoryData} = require("./controller");
const router = express.Router();


router.post("/create-category", createCategoryData);
router.get("/get-category",getCategoryData);

module.exports = router;