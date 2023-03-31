// External Imports

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
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch((err) => console.log(err));

// Parsers and Middlewares!

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/user", Routes);
app.use("/user/auth", UserIn);
app.use("/posts/", PostRoutes);

// Port

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("Your server is running on port 8000"));
