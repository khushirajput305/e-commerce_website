import React from 'react'
import './footer.css';
import { Divider } from '@mui/material';


const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);

  return (
    <>
    <footer className="footer">
      <div className="footer-top">
        <a href="#top">Back to top</a>
      </div>
      <div className="footer-sections">
        <div className="footer-section">
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Science</p>
        </div>
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer-section">
          <h3>Make Money with Us</h3>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Protect and Build Your Brand</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>
        <div className="footer-section">
          <h3>Let Us Help You</h3>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>Recalls and Product Safety Alerts</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Help</p>
        </div>
      </div>
      <div className="lastdetails">
      <img src="./amazon_PNG25.png" alt="logo" />
      </div>
      </footer>
      <div className="last_part">
      <div className="footer-down">
        <h3>AbeBooks</h3>
        <p>Books, art & collectibles</p>
      </div>
      <div className="footer-container">
        <h3>Amazon Web Services</h3>
        <p>Scalable Cloud Computing Services</p>
      </div>
      <div className="footer-container">
        <h3>Audible</h3>
        <p>Download Audio Books</p>
      </div>
      <div className="footer-container">
        <h3>IMDb</h3>
        <p>Movies, TV & Celebrities</p>
      </div>
      <div className="footer-container">
        <h3>Shopbop</h3>
        <p>Designer Fashion Brands</p>
      </div>
      <div className="footer-container">
        <h3>Amazon Business</h3>
        <p>Everything For Your Business</p>
      </div>
      <div className="footer-container">
        <h3>Prime Now</h3>
        <p>2-Hour Delivery on Everyday Items</p>
      </div>
      <div className="footer-container">
        <h3>Amazon Prime Music</h3>
        <p>100 million songs, ad-free</p>
        <p>Over 15 million podcast episodes</p>
      </div>
      <div className="footer-bottom">
        <a href="#">Conditions of Use & Sale</a>
        <a href="#">Privacy Notice</a>
        <a href="#">Interest-Based Ads</a>
        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
      </div>
     
      </>
    
  );
};
export default Footer;