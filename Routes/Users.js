const Routes = require("express").Router();
const mongoose = require("mongoose");
const UserModel = require("./../Models/Model");
const jwt = require("jsonwebtoken");

// Routes.get("/getname", (req, res) => {
// });

Routes.post("/signup", async (req, res) => {
  try {
    const User = await new UserModel({
      userName: "John Doe",
      email: "something@gmail.com",
      password: "123456",
    });

    await User.save();
    res.send("Sign up Successfully");
  } catch (err) {
    console.log(err);
  }
});

module.exports = Routes;
