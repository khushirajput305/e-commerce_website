import React, { useEffect, useState } from 'react';
import "./buynow.css";
import { Divider } from '@mui/material';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';

const Buynow = () => {
  const [cartData, setCartData] = useState(null); // Initialize as null

  console.log(cartData?.carts); // Prevent undefined error

  const getDataBuy = async () => {
    try {
      const res = await fetch("/cartdetails", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.log("Error:", errorText);
        return;
      }

      const data = await res.json();
      setCartData(data || { carts: [] });// Store full response
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    getDataBuy();
  }, []);

  return (
    <>
      {cartData?.carts?.length ? (
        <div className="buynow_section">
          <div className="buynow_container">
            <div className="left_buy">
              <h1>Shopping Cart</h1>
              <p>Select all items</p>
              <span className='leftbuyprice'>Price</span>
              <Divider />

              {cartData.carts.map((e) => (
                <React.Fragment key={e.id}>
                  <div className="item_container">
                    <img src={e.url} alt="" />
                    <div className="item_details">
                      <h3>{e.title.longTitle}</h3>
                      <h3>{e.title.shortTitle}</h3>
                      <h3 className="differentprice">₹{e.price.cost}</h3>
                      <p className='unusuall'>Usually dispatched in 8 days</p>
                      <p>Eligible for FREE Shipping</p>
                      <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="" />
                      <Option deleteData={e.id} get={getDataBuy} />
                    </div>
                    <h3 className='item_price'>₹{e.price.cost}</h3>
                  </div>
                  <Divider />
                </React.Fragment>
              ))}

              <Subtotal iteam={cartData.carts} />
            </div>
            <Right iteam={cartData.carts} />
          </div>
        </div>
      ) : (
        <p>No items in cart</p>
      )}
    </>
  );
};

export default Buynow;
