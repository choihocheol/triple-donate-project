const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");

// login
router.post("/login", UserController.login);

// signup
router.post("/singup", UserController.signup);


module.exports = router;