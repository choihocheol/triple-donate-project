const express = require("express");
const router = express.Router();
const PostController = require("../controller/PostController");
const multer = require('multer');
const fs = require('fs');
const path = require("path");

const upload = multer({});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dirSeq = path.join(__dirname, `../data/${req.body.seq}`)
        if(!fs.existsSync(dirSeq)){
            fs.mkdirSync(dirSeq)
        }
        const dirLabel = path.join(__dirname, `../data/${req.body.seq}/${req.body.label}`)
        if(!fs.existsSync(dirLabel)){
            fs.mkdirSync(dirLabel)
        }
        cb(null, dirLabel)
        
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const donationData = multer({
    storage: storage
});

// get Post List 
router.get("/", PostController.getPostList);

// save Post 
router.post("/save", upload.single('nftImage'), PostController.savePost);

// get Post List By Seq
router.get("/fetch/:seq", PostController.getPostFindBySeq);

// upload data
router.post("/upload", donationData.single('donationData'), PostController.upload);



module.exports = router;