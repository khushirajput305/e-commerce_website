import React, { useEffect, useState } from 'react'
import "./buynow.css";
import { Divider } from '@mui/material';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';

const Buynow = () => {

const[cartData,setCartData]=useState("");
console.log(cartData.carts);

const getDataBuy= async()=>{
  const res=await fetch("/cartdetails",{
    method:"GET",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },
    credentials:"include"
  }
  )

  const data= await res.json();
  // console.log(data);
  if(res.status!==201){
    console.log("Error")
  }else{
  setCartData(data.carts);
  }
}

useEffect(()=>{
  getDataBuy();
},[]);

  return (
    <>{
      cartData.length ? <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className='leftbuyprice'>Price</span>
          <Divider/>

          {
            cartData.map((e,k)=>{
              return(
                <>
            <div className="item_containert">
            <img src={e.url} alt="" />
            <div className="item_details">
              <h3>{e.title.longTitle}</h3>
              <h3>{e.title.shortTitle}</h3>
              <h3 className="differentprice">₹{e.price.cost}</h3>
              <p className='unusuall'>Usually dispatched in 8 days</p>
              <p>Eligible for FREE Shipping</p>
              <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="" />
              <Option deteleData={e.id} get={getDataBuy}/>
            </div>
            <h3 className='item_price'>₹{e.price.cost}</h3>
          </div>
          <Divider/>
          </>
              )
            })
          }
       
         
          <Subtotal iteam={cartData}/>
        </div>
        <Right iteam={cartData}/>
          </div>
    </div>:""
    }
    </>
  )
}

export default Buynow