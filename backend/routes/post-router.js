const express = require("express");
const router = express.Router();
const PostController = require("../controller/PostController");

// get Post List (pagination)
router.get("/", PostController.getPostList);

// save Post 
router.post("/save", PostController.savePost);

// get Post List By Seq
router.get("/fetch/:seq", PostController.getPostFindBySeq);


module.exports = router;