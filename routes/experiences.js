var express = require("express");
var router = express.Router();
// const Experience = require("../models/experience"); // need to import model
const { getAllExperiences, createExperience } = require("../controllers/experiencesController")

// const Experience = require('../models/experience')

/* GET experiences listing. */
router.get("/", getAllExperiences )// "get" is for reading

// post is for creating
router.post("/", createExperience)

module.exports = router;
