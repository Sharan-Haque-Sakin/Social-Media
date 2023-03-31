const { body, check, validationResult } = require("express-validator");
const { default: mongoose } = require("mongoose");
const createError = require("http-errors");
const PersonSchema = require("./../Models/Model");
const Model = mongoose.model("Person", PersonSchema);
// const User = mongoose.model("people",PersonSchema);

const addUserValidation = [
  check("userName")
    .exists()
    .withMessage("Hey , User name is required!")
    .custom(async (value) => {
      try {
        return Model.findOne({ userName: value }).then((user) => {
          if (user) {
            return Promise.reject("This Username is already in use");
          }
        });
      } catch (error) {
        console.log(error);
      }
    })

    .isLength({ min: 5, max: 10 })
    .withMessage("Your User Namer must be between 5 to 10 caracters!")
    .bail(),

  check("email")
    .exists()
    .withMessage("Email is required!")

    .bail()

    .isEmail()
    .withMessage("Invalid Email")
    .bail()

    .custom(async (value) => {
      try {
        return Model.findOne({ userName: value }).then((user) => {
          if (user) {
            return Promise.reject("This Username is already in use");
          }
        });
      } catch (error) {
        console.log(error);
      }
    })
    .bail(),

  check("password")
    .isLength({ min: 8 })
    .withMessage("Your Password must be between 6 to 10 caracters")
    .bail()

    .isStrongPassword()
    .withMessage(
      "Your password must contain at least 8 caracters long and should contain at least 1 Lowercase,1 Uppercase , 1 Number and 1 symbol"
    ),
];

function validationHandler(req, res, next) {
  const errors = validationResult(req);

  const mappedErrors = errors.mapped();

  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
}

module.exports = { addUserValidation, validationHandler };
