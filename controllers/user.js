const User = require("../models/user");

exports.signup = (req, res) => {
    const user = new User(req.body);
    console.log("req.body",req.body);
    user.save((errror, user) => {
        if(errror) {
            return res.status(400).json({
                errror
            })
        }
        res.json({
            user
        })
    });
}