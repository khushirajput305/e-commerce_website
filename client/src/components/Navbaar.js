import { React, useContext, useEffect, useState } from "react";
import "./navbaar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Rightheader from "./Rightheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";

// import { color } from "@mui/system";
const Navbaar = () => {
  const { account, setAccount } = useContext(LoginContext);
  // console.log(account);

  const history = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [text, setText] = useState("");
  //console.log(text)
  const [liopen, setLiopen] = useState(true);

  const { products } = useSelector((state) => state.getproductsdata);

  const [dropen, setDropen] = useState(false);

  const getdetailvaliduser = async () => {
    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      credentials: "include",
    });
    const data = await res.json();
    //console.log(data)

    if (res.status !== 201) {
      console.log("error");
    } else {
      console.log("data valid ");
      setAccount(data);
    }
  };
  const handleopen = () => {
    setDropen(true);
  };

  const handledrclose = () => {
    setDropen(false);
  };

  const logoutuser = async () => {
    const res2 = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      credentials: "include",
    });
    const data2 = await res2.json();
    //console.log(data)

    if (res2.status !== 201) {
      console.log("error");
    } else {
      console.log("data valid ");
      alert("user logout");
      history("/");
      setAccount(false);
    }
  };

  const getText = (iteams) => {
    setText(iteams)
    setLiopen(false)
  };

  useEffect(() => {
    getdetailvaliduser();
  }, []);

  return (
    <header>
      <nav>
        <div className="left">
          <IconButton className="hamburgur" onClick={handleopen}>
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>
          <Drawer open={dropen} onClose={handledrclose}>
            <Rightheader logclose={handledrclose} />
          </Drawer>

          <div className="navlogo">
            <NavLink to="/">
              <img src="./amazonin_logo.png" alt="" />
            </NavLink>
          </div>
          <div className="location">
            <span>Delivering to location</span>
            <p>
              <strong>
                <LocationOnOutlinedIcon />
                Update location
              </strong>
            </p>
          </div>

          <div className="nav_searchbaar">
            <div className="option">
              <select name="selecteditems">
                <option value="apple">All</option>
                <option value="all categories">All Categories</option>
                <option value="alexa skills"> Alexa Skills</option>
                <option value="amazon design"> Amazon Design </option>
                <option value="amazon fresh"> Amazon Fresh</option>
                <option value="amazon fashion">Amazon Fashion </option>
                <option value="amazon pharmacy">Amazon Pharmacy </option>
                <option value="appliances"> Appliances</option>
                <option value="app & games">App & Games </option>
                <option value="audio audiobook"> Audio Audiobook</option>
                <option value="baby"> Baby </option>
                <option value="beauty">Beauty </option>
                <option value="books"> Books</option>
                <option value="cars & motorbike">Cars & Motorbike </option>
                <option value="clothing">Clothing </option>
                <option value="accessories"> accessories</option>
                <option value="electronics">Electronics </option>
                <option value="furniture"> Furniture </option>
                <option value="computer & accessories">
                  {" "}
                  Computer & Accessories
                </option>
                <option value="deals">Deals </option>
                <option value="garden & outdoor"> 'Garden & Outdoor </option>
              </select>
            </div>
            <input
              type="text"
              name=""
              onChange={(e) => getText(e.target.value)}
              id=""
              placeholder="Search your product"
            />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>

            {
              text && 
              <List className="extrasearch" hidden={liopen}>
{products && Array.isArray(products) && products
  .filter(product => 
    product.title.longTitle.toLowerCase().includes(text.toLowerCase())
  )
  .map(product => (
    <ListItem key={product.id}>
      <NavLink to={`/getproductsone/${product.id}`} onClick={()=>setLiopen(true)}>
      {product.title.longTitle}
      </NavLink>
    </ListItem>
  ))
}

              </List>
            }

          </div>
        </div>
        <div className="right">
          <div className="language">
            <img className="lang-logo" src="./icons8-india-48.png" alt="" />
            <span>EN</span>
          </div>
          <div className="signin">
            <NavLink to="/login">
              {" "}
              <span style={{ color: "#fff" }}>Hello ,Signin</span>
            </NavLink>
            <p>
              <strong>Account & Lists</strong>
            </p>
          </div>
          <div className="order">
            <span>Return</span>
            <p>
              <strong>& Orders</strong>
            </p>
          </div>
          <div className="cart_btn">
            {account ? (
              <NavLink to="/buynow">
                <Badge
                  badgeContent={account?.carts?.length ?? 0}
                  color="primary"
                >
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            )}

            <p>Cart</p>
          </div>
          {account ? (
            <Avatar
              className="avtar"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {account.fname[0].toUpperCase()}
            </Avatar>
          ) : (
            <Avatar
              className="avtar"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            ></Avatar>
          )}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            {account ? (
              <MenuItem onClick={handleClose} onClick={logoutuser}>
                <LogoutIcon style={{ fontSize: 16, marginRight: 3 }} />
                Logout
              </MenuItem>
            ) : (
              ""
            )}
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Navbaar;
