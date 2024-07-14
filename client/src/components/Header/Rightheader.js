import React, { useContext } from "react";
import "./rightheader.css"
import { Avatar } from "@mui/material";
import { LoginContext } from "../context/ContextProvider";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
const Rightheader = ({logclose}) => {
  const { account, setAccount } = useContext(LoginContext);

  return (
    <>
      <div className="rightheader">
        <div className="right_nav">
          {account ? (
            <Avatar className="avtar">{account.fname[0].toUpperCase()}</Avatar>
          ) : (
            <Avatar className="avtar"></Avatar>
          )}
          {
            account ? <h3>Helloo ,{account.fname.toUpperCase()}</h3> :""
          }
        </div>
        <div className="nav_btn" onClick={()=>logclose()}>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/">Shop by category</NavLink>
          <Divider  style={{width:"100%" , marginLeft:"-20px"}}/>

          <NavLink to="/">today's deal</NavLink>
          {account ? (
            <NavLink to="/buynow">Your orders</NavLink>
          ) : (
            <NavLink to="/login">Your orders</NavLink>
          )}
          <Divider style={{width:"100%" , marginLeft:"-20px"}} />
          <div className="flag">
            <NavLink to="/">Settings</NavLink>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightheader;
