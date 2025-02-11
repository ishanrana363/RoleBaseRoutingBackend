const userModel = require("../models/userModel");
const { successResponse, errorResponse } = require("../response/response");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const key = process.env.KEY

const registrationUser = async (req, res) => {
    try {
        const reqBody = req.body;
        const data = await userModel.create(reqBody);
        return successResponse(res, 201, "User registration successfully", data);
    } catch (error) {
        return errorResponse(res, 500, "Something went wrong", error);
    }
};


const userLogin = async (req, res) => {
    try {
        let email = req.body.email;
        const password = req.body.password;
        const user = await userModel.findOne({ email: email, password: password });
        if (!user) {
            return errorResponse(res, 404, "User not found", null);
        };
        const token = jwt.sign({ id: user._id, role: user.role }, key, { expiresIn: "4days" });
        const verifyToken = jwt.verify(token, key);
        const role = verifyToken.role

        return res.status(200).json({
            status: "success",
            token: token,
            role: role
        })

    } catch (error) {
        return errorResponse(res, 500, "something went wrong", error)
    }
}

module.exports = { registrationUser, userLogin };