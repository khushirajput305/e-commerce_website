import React from 'react'
import "./slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import {products} from "./productData"
import { Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';

const responsive = {
  destop: {
    breakpoint: { max: 3000, min: 1204 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    item: 2
  },
  mobile: {
    breakpoint: { max: 464, mmin: 0 },
    items: 1
  }
};

const Slide = ({ products=[] }) => {
  return (
    <>

      <div className="products_section">
        <div className="products_deal">
          <h3>Deal OF the Day</h3>
          <button className='view_btn'>View All</button>
        </div>

        <Divider />
      {products.length>0? (
        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={false}
          swipeable={true}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          showDots={false}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >

          {
            products.map((e) => {
              return (
                <NavLink to={`/getproductsone/${e.id}`}>
                  <div className="products_items">
                    <div className="product_img">
                      <img src={e.url} alt="products" />
                    </div>
                    <p className="products_name">{e.title.shortTitle}</p>
                    <p className="products_offer">{e.discount}</p>
                    <p className="products_explore">{e.tagline}</p>
                  </div>
                </NavLink>
              )
            })
          }
        </Carousel>
      ):(
        <p> Loading products ...</p>
      )}
      </div>
    </>
  )
}

export default Slide