// where we will define all the fields of experience
// title (string), pictureUrl (string/URL), country (string), price (number), duration (number)
const mongoose = require("mongoose")

const expSchema = new mongoose.Schema({
    title: String,
    pictureUrl: String,
    country: String,
    price: Number,
    duration: Number
})

const Experience = mongoose.model("Experience", expSchema) // capital E because this is a thing to be exported 

module.exports = Experience