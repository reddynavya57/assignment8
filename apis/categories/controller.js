/*Assignment 8

- The	task is related to E-commerce. Create categories	and then create products under their categories.
- list of properties for each product (colour, size, price, name)
- Generate	a list of reports as mentioned below
    - products	list by category wise
    - products	list based on color and size
    - Top	5 highest price products list
    - Nth	highest price products list */


const categoryModel=require("./model").categoryModel;

//create categories
exports.createCategoryData = async(req,res) => {
    try{
        if(!req.body.category){
            res.send("Category cannot be empty");
        } else {
            let categoryData = await categoryModel.create(req.body);
            res.send({msg:"Data created successfully",categoryData});
        }
    }catch(err){
        res.send({"Data crteation failed":err.message});
    }
}
    
//get categories    
exports.getCategoryData = async(req,res) => {
    try{
        let categoryList = await categoryModel.find();
        res.send({msg:"List",categoryList});
    }catch(err){
        res.send({"Unable to fetch the data":err.message});
    }
}
    
    