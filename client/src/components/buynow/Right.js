import React,{ useEffect,useState} from 'react'
import { Divider } from '@mui/material'
import "./buynow.css"


const Right = ({iteam}) => {

  const [price, setPrice] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [iteam])

  const totalAmount = () => {
    let price = 0;
    iteam.map((item) => {
      price += item.price.cost
    })
    setPrice(price);
  }

  return <div className="right_buy">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" />
        <div className="cost_right">
          <p>Your order is eligible for FREE Delivery.</p><br/>
          <span style={{color:"#565959"}}>Select this option at checkout .Details</span>
          <h3>Subtotal ({iteam.length} items):<span style={{fontWeight:700}}>₹{price}</span></h3>
          <button className='rightbuy_btn'>Proceed to Buy</button>
          <Divider/>
          <div className="emi">
            Emi Avalible
          </div>
        </div>
      </div>
}

export default Right