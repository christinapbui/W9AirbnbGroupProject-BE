var express = require("express");
var router = express.Router({mergeParams:true});
// const Experience = require("../models/experience"); // need to import model
const { getAllExperiences, createExperience, updateExperience } = require("../controllers/experiencesController")

/* GET experiences listing. */
router.route("/")
.get(getAllExperiences)
.post(createExperience)

router.route("/:eid")
.patch(updateExperience)

module.exports = router;