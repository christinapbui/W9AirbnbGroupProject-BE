const Experience = require("../models/experience");

const getAllExperiences = async (req, res) => {
  const experiences = await Experience.find();
  res.send(experiences); 
};

const createExperience = async (req, res) => {
  const title = req.body.title;
  const pictureUrl = req.body.pictureUrl;
  const country = req.body.country;
  const price = req.body.price;
  const duration = req.body.duration;
  const newExperience = await Experience.create({
    title, 
    pictureUrl,
    country,
    price,
    duration,
  });
  res.send(newExperience);
};

const updateExperience = async (req, res, next) => {
  try{
    const experience = await Experience.findOne({
      _id: req.params.eid,
      // user: req.user._id
    })

    if(!experience) return res.status(404).json({
      status: "Fail",
      message: "No document found"
    })

    const fields = Object.keys(req.body);
    fields.map(field => experience[field] = req.body[field])
    await experience.save()
    res.status(200).json({
      status: "Successfully updated your experience",
      data: experience
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      status: "error",
      error: err.message
    })
  }
}


module.exports = { getAllExperiences, createExperience, updateExperience };
