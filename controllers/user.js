const User = require("../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.signup = (req, res) => {
    const user = new User(req.body);
    console.log("req.body",req.body);
    user.save((errror, user) => {
        if(errror) {
            return res.status(400).json({
                errror: errorHandler(errror)
            })
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        })
    });
}