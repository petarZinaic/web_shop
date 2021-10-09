const mongoose = require("mongoose");


const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        requierd: true,
        maxlength: 32,
        unique: true
    },
    
}, { timestamps: true })


module.exports = mongoose.model("Category", categorySchema);

