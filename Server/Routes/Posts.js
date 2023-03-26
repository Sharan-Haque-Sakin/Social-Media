const { getPostRoute, handlePosts } = require("../Controllers/PostsController");

const Routes = require("express").Router();
const jwt = require("jsonwebtoken");

// Get Post Route

Routes.get("/", getPostRoute);

Routes.get("/getname", (req, res) => {
  const decoded = jwt.verify(req.cookies.authcookie, process.env.secret);
  const { userName, userId } = decoded;
  res.status(200).json({
    userName: userName,
    userId: userId,
  });
});

// Upload Posts!

Routes.post("/", handlePosts);

module.exports = Routes;
