var express = require("express");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

var indexRouter = require("./routes/index");
var expRouter = require("./routes/experiences");
// var detailRouter = require("./routes/detail")

var app = express();
mongoose
  .connect("mongodb://localhost/w9-airbnb", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to MongoDB..."))
  .catch((err) => console.error("failed to connect to MongoDB...", err));

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/", indexRouter);
app.use("/experiences", expRouter);
// app.use("/details",detailRouter)

// experiences/:eid   get => single exp || patch=> update Single Exp || .delete => delete single single epx


module.exports = app;
