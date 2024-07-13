require("dotenv").config();
const express=require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn")

const cookieParser = require("cookie-parser");

const Products = require("./models/productsSchema")
const DefaultData = require("./defaultdata")
const Products2 =require( "./models/productsSchema2");
const SecondSlide =require("./SecondSlide");
const cors = require("cors");
const router = require("./routes/router")

app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);

const port=8005;

app.listen(port,()=>{
    console.log("server is running on port number 8005");
});

DefaultData();
SecondSlide();