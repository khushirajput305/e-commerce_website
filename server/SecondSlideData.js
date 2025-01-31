const SecondSlide= require("./models/productsSchema2");
const product2= require("./constant/product2")

const secondSlide = async () => {
  try {
    await SecondSlide.deleteMany({});
    const slide2Data = await SecondSlide.insertMany(product2);
    console.log(slide2Data);
  } catch (error) {
    console.log("Error " + error.message);
  }
}

module.exports = secondSlide;