const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcryptjs = require("bcryptjs");
const athenticate = require("../middleware/authenticate");

//get productsdata api
router.get("/getproducts", async (req, res) => {
  try {
    const productsdata = await Products.find();
    // console.log("console the data" + productsdata);
    res.status(201).json(productsdata);
  } catch (error) {
    console.log("error" + error.message);
  }
});

//get individual data
router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);

    const individualdata = await Products.findOne({ id: id });
    //console.log(individualdata + "individual data")

    res.status(201).json(individualdata);
  } catch (error) {
    res.status(400).json(individualdata);
    console.log("Error " + error.message);
  }
});

//register data

router.post("/register", async (req, res) => {
  // console.log(req.body);

  const { fname, email, mobile, password, cpassword } = req.body;

  if (!fname || !email || !mobile || !password || !cpassword) {
    res.status(422).json({ error: "fill the all data" });
    console.log("not data available");
  }
  try {
    const preuser = await USER.findOne({ email: email });

    if (preuser) {
      res.status(422).json({ error: "this user is already present" });
    } else if (password != cpassword) {
      res.status(422).json({ error: "password and cpassword not match" });
    } else {
      const finalUser = new USER({
        fname,
        email,
        mobile,
        password,
        cpassword,
      });

      //encrypt asdfgh ->> decrypt khushi
      //bcryptjs

      //password hasing process

      const storedata = await finalUser.save();
      console.log("data on console" + storedata);

      res.status(201).json(storedata);
    }
  } catch (error) {
    console.log("error" + error.message);
  }
});

//login user api

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "fill the all data" });
  }
  try {
    const userlogin = await USER.findOne({ email: email });
    console.log(userlogin);

    if (userlogin) {
      const isMatch = await bcryptjs.compare(password, userlogin.password);
      //console.log(isMatch);

      //token generate

      const token = await userlogin.generateAuthtoken();
      //console.log(token);

      res.cookie("Amazonweb", token, {
        expires: new Date(Date.now() + 9000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "invalid details" });
      } else {
        res.status(201).json(userlogin);
      }
    } else {
      res.status(400).json({ error: "invalid details" });
    }
  } catch (error) {
    res.status(400).json({ error: "invalid details" });
  }
});

//adding the data into cart

router.post("/addcart/:id", athenticate, async (req, res) => {
  try {
    const { id } = req.params;

    // Find product by _id (ensure id is valid)
    const cart = await Products.findOne({ _id: id });

    if (!cart) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Find user based on authentication token
    const UserContact = await USER.findOne({ _id: req.userID });

    if (!UserContact) {
      return res.status(401).json({ error: "Invalid user" });
    }

    // Add product to user's cart
    const cartData = await UserContact.addcartdata(cart);
    await UserContact.save();

    console.log("Cart updated:", cartData);
    res.status(201).json(UserContact);
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//get cart details

router.get("/cartdetails", athenticate, async (req, res) => {
  try {
    const buyuser = await USER.findOne({ _id: req.userID });
    res.status(201).json(buyuser);
  } catch (error) {
    console.log("error" + error);
  }
});

//get valid user

router.get("/validuser", athenticate, async (req, res) => {
  try {
    const validuserone = await USER.findOne({ _id: req.userID });
    res.status(201).json(validuserone);
  } catch (error) {
    console.log("error" + error);
  }
});

//remove item from cart
router.delete("/remove/:id", athenticate, async (req, res) => {
  try {
    const { id } = req.params;

    req.rootUser.carts = req.rootUser.carts.filter((cruval) => {
      return cruval.id != id;
    });

    req.rootUser.save();
    res.status(201).json(req.rootUser);
    console.log("item remove");
  } catch (error) {
    console.log("error " + error);
    res.status(400).json(req.rootUser);
  }
});

//for user logout

router.get("/logout", athenticate, (req, res) => {
  try {
    req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
      return curelem.token !== req.token;
    });
    res.clearCookie("Amazonweb", { path: "/" });

    req.rootUser.save();
    res.status(201).json(req.rootUser.tokens);
    console.log("user logout ");
  } catch (error) {
    console.log("error for user logout");
  }
});

module.exports = router;
