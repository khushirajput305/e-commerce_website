import React, { useEffect } from "react";
import Banner from "./Banner";
import BoxSlide from "./BoxSlide";
import Slide from "./Slide";
import { getProducts } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";

const Maincomp = () => {
  const { products } = useSelector((state) => state.getproductdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Banner />
      <BoxSlide />
      <div className="home_section">
        <div className="slide_part">
          <div className="left_slide">
            <Slide products={products} />
          </div>
          <div className="right_slide">
            <h4>Only at ₹585 | Wearable portable fan</h4>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/12407722031/nss/MayBAU/Fan_DT_CC_379x304._SY304_CB558601697_.jpg"
              alt=""
            />
            <a href="">See More</a>
          </div>
        </div>
        <div className="center_img">
          <img
            src="https://m.media-amazon.com/images/I/81zEOHy0XWL._SX679_.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Maincomp;
