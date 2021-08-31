const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

app.get("", (req, res) => {
    res.send("Hello from node")
});

mongoose.connect(process.env.DATABASE)
    .then(() => console.log("DB Connected"))  

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
});