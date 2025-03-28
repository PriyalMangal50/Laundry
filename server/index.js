const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connection = require("./database/db.js");
const product_list = require("./product_list.js");
const PORT = 3001;

const allowedOrigins = [
  "https://laundry-ckk8.vercel.app", // Replace with your Vercel app's URL
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use('/api/v1/order', require('./routes/orderRoute'));
app.use('/api/v1/user', require('./routes/userRoute'));
app.use('/api/v1/product', require('./routes/productRoute'));

connection();

app.listen(PORT, () => console.log("server is running on port", PORT));

product_list();
