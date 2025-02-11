const userModel = require("../models/userModel");
const { successResponse, errorResponse } = require("../response/response");

const registrationUser = async (req,res)=>{
    try {
        const reqBody = req.body;
        const data = await userModel.create(reqBody);
        return successResponse(res,201,"User registration successfully",data);
    } catch (error) {
        return errorResponse(res,500,"Something went wrong",error);
    }
};


module.exports = {registrationUser}