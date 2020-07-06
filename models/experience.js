const mongoose = require("mongoose");

const expSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minLength: 5, // minimum length is 5 chars
        maxLength: 100,
        required: [true, "Experience must have a title!"],
    },
    pictureUrl: {
        type: String,
        trim: true,
        required: [true, "Experience must have a picture!"],
    },
    country: {
        type: String,
        trim: true,
        required: [true, "Country must be added!"],
    },
    price: {
        type: Number,
        trim: true,
        required: [true, "Experience must have a price!"],
    },
    duration: {
        type: Number,
        trim: true,
        required: [true, "Duration must be added!"],
    },
    // details here (will see under getSingleExperience)
    city: {
        type: String,
        trim: true,
        required: [true, "City must be added!"],
    },
    maxGroupSize: {
        type: Number,
        trim: true,
    },
    language: {
        type: String,
        trim: true,
        required: [true, "Language is required!"],
    },
    description: {
        type: String,
    },
    host: {
        type: String,
        trim: true,
        required: [true, "Experience must have a host"],
    },
    whatToBring: {
        type: String,
        trim: true,
    },
    // tags: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Tag",
    //     required: [true, "Experience must have a tag"]
    // }
});

const Experience = mongoose.model("Experience", expSchema);

module.exports = Experience;
