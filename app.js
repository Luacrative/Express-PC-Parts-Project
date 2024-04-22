// Dependencies 
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();

// Routes 
const indexRoute = require("./routes/index");
const componentsRoute = require("./routes/components");
const partsRoute = require("./routes/parts");

// Initialize app 
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRoute);
app.use("/components", componentsRoute);
app.use("/parts", partsRoute);

// Initialize database 
mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGO;
(async () => { 
    await mongoose.connect(mongoDB)
})().catch((err) => console.log(err));


module.exports = app;