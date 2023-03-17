const { Schema, model } = require("mongoose");
const { default: mongoose } = require("mongoose");

const d = new Date();

const date = d.toLocaleDateString();
const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
// const t = d.getHours();

JSON.stringify(date);
JSON.stringify(time);
console.log(time);
const PostSchema = new Schema({
  date: {
    type: String,
    default: date,
  },
  time: {
    type: String,
    default: time,
  },
  content: {
    type: String,
    unique: true,
    max: 200,
    min: 3,
  },
  likesGot: {
    type: Number,
    default: 0,
  },
  dislikeGot: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Person",
  },
});

module.exports = PostSchema;
