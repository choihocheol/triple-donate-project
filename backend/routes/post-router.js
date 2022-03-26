const express = require("express");
const router = express.Router();
const PostController = require("../controller/PostController");
const multer = require('multer');
const upload = multer({
    
})

// get Post List 
router.get("/", PostController.getPostList);

// save Post 
router.post("/save", upload.single('nftImage'), PostController.savePost);

// get Post List By Seq
router.get("/fetch/:seq", PostController.getPostFindBySeq);

module.exports = router;