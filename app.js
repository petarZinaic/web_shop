const express = require("express");

const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const cors = require("cors")
require("dotenv").config();

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");


const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDb connected.'));

// middlewares
app.use(morgan("dev"));
app.use(express.json());  
app.use(cookieParser());
app.use(expressValidator());  
app.use(cors());

app.use("/api", authRoutes);    
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api/", productRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
});