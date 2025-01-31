import React, { useState } from 'react'
import './newnav.css';
import Leftheader from "./leftheader"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

const Newnav = () => {

  const [drOpen, setDrOpen] = useState(false)

  const handleOpen=()=>{
    setDrOpen(true)
  }

  const handleDrClose=()=>{
    setDrOpen(false)
  }

  
  return (
    <>
      <div className="new_nav">

        <div className="left">
          <IconButton className='hamburgur' onClick={handleOpen}>
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>

          <Drawer open={drOpen} onClose={handleDrClose} >
            <Leftheader LogClose={handleDrClose}/>
          </Drawer>
          <p>All</p>
          <p>Fresh</p>
          <p>Amazon miniTV</p>
          <p>Sell</p>
          <p>Best Sellers</p>
          <p>Mobiles</p>
          <p>Today's Deal</p>
          <p>Prime</p>
          <p>Customer Service</p>
          <p>Electronics</p>
          <p>New Releases</p>
          <p>Home & Kitchen</p>
          <p>Fashion </p>
          <p>Amazon Pay</p>
          <p>Gifts Ideas</p>
          <p>Computers</p>
          <p>Books</p>
        </div>
      </div>
    </>
  )
}

export default Newnav