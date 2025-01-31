import React, {useContext}from 'react'
import "./buynow.css";
import {LoginContext} from "../context/ContextProvider"
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Option = ({deteleData,get}) => {

  const { account, setAccount } = useContext(LoginContext);

  const removeData= async(req,res)=>{
    try {
      const res= await fetch(`/remove/${deteleData}`,{
        method:"DELETE",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });
      const data = await res.json();
      console.log(data);

      if(res.status===400||!data){
        console.log("Error");
      }else{
        console.log("User delete");
        setAccount(data);
        get();
        toast.success('item removed from cart ', {
          position: "top-center",
          });
      }
    } catch (error) {
      console.log("Error "+error.message);
    }
  }

  return (
    <>
      <div className="add_remove_select">
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10+</option>
        </select>
      <p style={{cursor:"pointer"}} onClick={()=>removeData(deteleData)}>Delete</p><span>|</span>
      <p className='forremovemedia'>Save for Later</p><span>|</span>
      <p className='forremovemedia' >See More like this</p><span>|</span>
      <ToastContainer/>
      </div>
    </>
  )
}

export default Option