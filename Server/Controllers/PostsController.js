const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");
const Model = require("./../Models/PostModel");

const PostModel = mongoose.model("Posts", Model);

async function getPostRoute(req, res) {
  try {
    const Posts = await (
      await PostModel.find({}).populate("user", "userName")
    ).reverse();

    res.status(200).json({
      msg: "Fetch Successful",
      data: Posts,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      msg: "Something went wrong:(",
    });
  }
}

async function handlePosts(req, res) {
  // let success = false;

  // decode

  const decoded = jwt.verify(req.cookies.authcookie, process.env.secret);
  const { userName, userId } = decoded;

  try {
    const Post = await new PostModel({
      content: req.body.content,
      user: userId,
    });
    await Post.save();

    // res.send("Post successful!");
    res.status(200).json({
      msg: "Post Successful! ",
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "error",
      success: false,
    });
  }
}

module.exports = { handlePosts, getPostRoute };
