import React from 'react'
import './footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const year= new Date().getFullYear();
  const goTobtn=()=>{
      window.scrollTo({top:0, left:0, behavior:"smooth"})
  }
  return (
    <footer>
      <div className="backToTop" onClick={goTobtn}>Back To Top</div>
      <div className="footer-container">
        <div className="first-block">
          <h3>Get To Know US</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Science</p>
        </div>
        <div className="second-block">
          <h3>Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="third-block">
          <h3>Make Money with Us</h3>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerato</p>
          <p>Protect and Build Your Brand</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>
        <div className="fourth-block">
          <h3>Let Us Help You</h3>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Help</p>
        </div>
      </div>
      <div className="second-footer">
        <div className="block">
          <p><strong>AbeBook</strong></p>
          <p>Books, arts & collectibles</p>
        </div>
        <div className="block">
          <p><strong>Amazon Web Services</strong></p>
          <p>Scalable Cloud Computing Services</p>
        </div>
        <div className="block">
          <p><strong>Audible</strong></p>
          <p>Download Audio Books	</p>
        </div>
        <div className="block">
          <p><strong>IMDb</strong></p>
          <p>Movies, TV & Celebrities</p>
        </div>
        <div className="block">
          <p><strong>Shopbop</strong></p>
          <p>Designer Fashion Brands</p>
        </div>
        <div className="block">
          <p><strong>Amazon Business</strong></p>
          <p>Everything For Your Business</p>
        </div>
        <div className="block">
          <p><strong>Prime Now</strong></p>
          <p>2-Hour Delivery on Everyday Items</p>
        </div>
        <div className="block">
          <p><strong>Amazon Prime Music</strong></p>
          <p>100 million songs, ad-free Over 15 million podcast episodes</p>
        </div>
      </div>
      <div className="lastdetails">
        <img src="./amazon_PNG25.png" alt="logo" />
        <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  )
}

export default Footer