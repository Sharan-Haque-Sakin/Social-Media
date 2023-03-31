// External Imports

const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");

// Internal Imports

const PersonSchema = require("../Models/Model");
const Model = mongoose.model("Person", PersonSchema);

// Account creation Algorithm

async function createUser(req, res) {
  const hashPass = await bcrypt.hash(req.body.password, 10);
  let success = false;
  try {
    const User = await new Model({
      userName: req.body.userName,
      password: hashPass,
      email: req.body.email,
    });

    await User.save();

    res
      .status(200)
      .json({ msg: "Your account was successfully created!", success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ errors: "Something went wrong:(", success: false });
  }
}

// Login Algorithm

async function loginUser(req, res) {
  let success = false;
  try {
    const findUser = await Model.findOne({ userName: req.body.userName });

    if (findUser) {
      const compPass = await bcrypt.compare(
        req.body.password,
        findUser.password
      );
      if (compPass) {
        const token = jwt.sign(
          {
            userName: findUser.userName,
            email: findUser.email,
            userId: findUser._id,
          },
          process.env.secret
        );
        // console.log()
        res.status(200).json({
          msg: "Login Successfull",
          success: true,
          jwt: token,
        });
      } else {
        res.status(400).json({
          msg: "Authentication failed!",
          param: "password",
          success: false,
        });
      }
    } else {
      res.status(400).json({
        msg: "No user was found:(",
        success: false,
        params: "userName",
      });
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = { createUser, loginUser };
