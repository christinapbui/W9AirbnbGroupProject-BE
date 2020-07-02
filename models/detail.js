const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
  city: String,
  maximumGroupSize: Number,
  language: String,
  description: String,
  hostDetails: String,
  whatToBring: String
});

const Detail = mongoose.model("Detail", detailSchema);

module.exports = Detail;
