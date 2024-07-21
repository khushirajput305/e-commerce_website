const Products2= require("./models/productsSchema2");
const Second_slide_Data=require("./constant/productdata2.js");

const SecondSlide=async()=>{
    try {
        await Products2.deleteMany({});
        const slide2Data= await Products2.insertMany(Second_slide_Data);
        console.log(slide2Data);
    } catch (error) {
        console.log("Error "+ error.message);
    }
}

module.exports=SecondSlide;