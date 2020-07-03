var express = require("express");
var router = express.Router({mergeParams:true});
const { getAllDetail, createDetail, updateDetail } = require("../controllers/experiencesController")

// const Experience = require('../models/experience')

/* GET experiences listing. */
router.route("/")
.get(getAllDetail)
.post(createDetail)

router.route("/:eid")
.patch(updateDetail)

module.exports = router;