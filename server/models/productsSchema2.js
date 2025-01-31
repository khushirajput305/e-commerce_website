const mongoose=require("mongoose");

const productsSchema2=new mongoose.Schema({
  id:String,
  url:String,
  detailsurl:String,
  title:Object,
  price:Object,
  description:String,
  discount:String,
  tagline:String
});

const SecondSlide= new mongoose.model("secondslides",productsSchema2);

module.exports=SecondSlide;