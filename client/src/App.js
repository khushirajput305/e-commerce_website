import Navbaar from "./components/Header/Navbaar";
import Newnav from "./components/newnavbaar/Newnav";
import Maincomp from "./components/home/Maincomp";
import Footer from "./components/footer/Footer";
import Sign_in from "./components/signup_sign/Sign_in";
import SignUp from "./components/signup_sign/SignUp";
import Cart from "./components/cart/Cart";
import Buynow from "./components/buynow/Buynow";
import SecondslideCart from "./components/cart/SecondslideCart";
import "./App.css";
import { Routes , Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 200);
  }, [])


  return (
    <>
      {
        data ? (
          <>
            <Navbaar />
            <Newnav />
            <Routes>
              <Route path="/" element={<Maincomp/>}/>
              <Route path="/login" element={<Sign_in/>}/>
              <Route path="/register" element={<SignUp/>}/>
              <Route path="/getproductsone/:id" element={<Cart/>}/>
              <Route path='/getproductstwo/:id' element={<SecondslideCart/>}/>
              <Route path="/buynow" element={<Buynow/>}/>

            </Routes>
              
            <Footer />
          </>
        ) : (
          <div className="circle">
            <CircularProgress />
            <h2> Loading....</h2>
          </div>
        )
      }

    </>
  );
}

export default App;