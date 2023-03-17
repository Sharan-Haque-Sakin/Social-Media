const Routes = require("express").Router();
const mongoose = require("mongoose");
const UserModel = require("./../Models/Model");

Routes.get("/", (req, res) => {
  res.send("Hey this is users route!");
});

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
