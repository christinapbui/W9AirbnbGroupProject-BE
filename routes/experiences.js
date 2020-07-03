var express = require("express");
var router = express.Router({mergeParams:true});
// const Experience = require("../models/experience"); // need to import model
const { getAllExperiences, createExperience, getSingleExperience, updateExperience } = require("../controllers/experiencesController");
// const detailsController = require("../controllers/experiencesController");
// var detailRouter = require("../detail")

// const Experience = require('../models/experience')

/* GET experiences listing. */
router.route("/")
.get(getAllExperiences)
.post(createExperience)

router.route("/:eid")
.get(getSingleExperience)
.patch(updateExperience)


module.exports = router;