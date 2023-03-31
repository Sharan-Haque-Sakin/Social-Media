// External Imports
const path = require("path");
const config = require("./config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

// Internal Imports

const PostRoutes = require("./Routes/Posts");
const Routes = require("./Routes/Users");
const UserIn = require("./Routes/Auth");

require("dotenv").config();

mongoose.set("strictQuery", true);
config();
// mongoose
//   .connect(process.env.MONGODB)
//   .then(() => {
//     console.log("MongoDb connected");
//   })
//   .catch((err) => console.log(err));

// Parsers and Middlewares!
app.use(express.static(path.join(__dirname, "./Client/build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/user", Routes);
app.use("/user/auth", UserIn);
app.use("/posts/", PostRoutes);
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./Client/build/index.html"));
});
// Port

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("App listening on port");
});

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// //Routes go here

// //Connect to the database before listening
// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log("listening for requests");
//   });
// });
