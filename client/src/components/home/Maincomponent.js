import React, { useEffect } from "react";
import Banner from "./Banner";
import Product from "./Product";
import Slide from "../slide/Slide";
import SecondSlide from "../slide/SecondSlide";
import { getProducts } from "../redux/actions/action";
import {secondSlideData} from "../redux/actions/action"
import { useDispatch,useSelector } from "react-redux";

import "./home.css";
const Maincomponent = () => {

const {products} = useSelector(state =>state.getproductsdata);
console.log(products);
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getProducts())
},[dispatch]);

// const {second_Data} = useSelector((state) =>state.getSecondSlidedata);
//  console.log(second_Data);

//   useEffect(()=>{
//    dispatch(secondSlideData())
// }, [dispatch]);


  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>
      <Product />
      <Slide/>
      <div className="center_img">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/march/brands/GW/Under_1499_Tallhero_3000x1200._CB561212093_.jpg" alt="" />
      </div>
      <SecondSlide/>
    </div>
  );
};

export default Maincomponent;
