
const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");


// login
router.post("/login", UserController.login);

// signup
router.post("/signup", UserController.signup);

// get Mylist Data
router.get("/mylist", UserController.getMyData);

// logout
router.post("/logout", UserController.logout);



module.exports = router;
