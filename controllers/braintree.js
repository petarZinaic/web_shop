const User = require("../models/user");
const braintree = require("braintree");
require("dotenv").config();



// const gateway = braintree.connect({
//     environment: braintree.Environment.Sandbox,
//     merchantId: process.env.BRAINTREE_MERCHANT_ID,
//     publicKey: process.env.BRAINTREE_PUBLIC_KEY,
//     privateKey: process.env.BRAINTRE_PRIVATE_KEY
// })

const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.BRAINTRE_PRIVATE_KEY
})


exports.generateToken = (req, res) => {
    gateway.clientToken.generate({}, function(err, respose) {
        if(err) {
            res.status(500).send(err);
        } else {
            res.send(respose);
        }
    })
}
