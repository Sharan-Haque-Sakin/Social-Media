// External Imports

const Router = require("express").Router();
const { model } = require("mongoose");
const bcrypt = require("bcrypt");

// Initital Imports

const { createUser, loginUser } = require("../Controllers/userControllers");
const {
  addUserValidation,
  validationHandler,
} = require("../MIddlewares/userValidation");

// User SignUp

Router.post(
  "/signup",

  addUserValidation,
  validationHandler,
  createUser
);

// User Login

Router.post("/login", loginUser);

module.exports = Router;
