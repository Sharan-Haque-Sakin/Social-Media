const { default: mongoose, Schema, model } = require("mongoose");

const d = new Date();

let date = d.toLocaleDateString();
let time = d.toLocaleTimeString();

JSON.stringify(date);
JSON.stringify(time);

const PersonSchema = new Schema({
  userName: {
    type: String,

    required: true,
    unique: true,
    min: 4,
    max: 8,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  likesGot: {
    type: Number,
    default: 0,
  },
  likesGive: {
    type: Number,
    default: 0,
  },
  date: {
    type: String,
    default: date,
  },
  time: {
    type: String,
    default: time,
  },
});

// model("Person", PersonSchema);

PersonSchema.methods = {
  findUserByuserName: function (userName) {
    return model("Person").find({ userName: userName });
  },
  findUserByEmail: function (email) {
    return model("Person").find({ email: email });
  },
};

module.exports = PersonSchema;
