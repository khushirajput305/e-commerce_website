const mongoose = require("mongoose");

const productsSchema2= new mongoose.Schema({
    id:String,
    url:String,
    detailsUrl:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String
})

const Products2=new mongoose.model("secondslide",productsSchema2);
module.exports=Products2;