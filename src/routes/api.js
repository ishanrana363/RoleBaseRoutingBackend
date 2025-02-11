const express = require("express");
const router = express.Router();
// user controller
const userController = require("../controllers/userController");


// user related api
router.post("/registration", userController.registrationUser);


module.exports = router