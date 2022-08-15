//MONGODB PW: zuziazuzia
//MONGODB CONNECTION: mongodb+srv://zuza:<password>@cluster0.8xnjw.mongodb.net/?retryWrites=true&w=majority

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("./config.js");

const saucesRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");
const likeRoutes = require("./routes/likes");

const app = express();

mongoose
  .connect(
    "mongodb+srv://zuza:zuziazuzia@cluster0.8xnjw.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", saucesRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/sauces", likeRoutes);

module.exports = app;
