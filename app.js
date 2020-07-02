var express = require("express");
// var path = require('path'); // helps you navigate files on computer
// var cookieParser = require('cookie-parser'); // data that can track you (data sent between computer and browser) // you don't normally use cookies in APIs
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors")

var indexRouter = require("./routes/index");
var expRouter = require("./routes/experiences");

var app = express();
mongoose.connect("mongodb://localhost/");

app.use(logger("dev"));
app.use(express.json());
app.use(cors())
// app.use(express.urlencoded({ extended: false })); // url encoded is when you pass things in HTML form // when using APIs, not common
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public'))); // a way to serve static assets (CSS files, JS files) - we don't have any pictures/CSS files (bc we're calling APIs)

app.use("/", indexRouter);
app.use("/experiences", expRouter);

module.exports = app;
