const express = require("express");
const router = express.Router();
// user controller
const userController = require("../controllers/userController");


// user related api
router.post("/registration", userController.registrationUser);
router.post("/login", userController.userLogin);


module.exports = router