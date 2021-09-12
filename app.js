const express = require("express");

const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser")
require("dotenv").config();

const userRoutes = require("./routes/user");


const app = express();
app.use(express.json());  

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDb connected.'));

// middlewares
app.use(morgan("dev"));
app.use(cookieParser())  

app.use("/api", userRoutes);    

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
});