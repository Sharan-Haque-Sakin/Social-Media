const { getPostRoute, handlePosts } = require("../Controllers/PostsController");

const Routes = require("express").Router();

// Get Post Route

Routes.get("/", getPostRoute);

// Upload Posts!

Routes.post("/", handlePosts);

module.exports = Routes;
