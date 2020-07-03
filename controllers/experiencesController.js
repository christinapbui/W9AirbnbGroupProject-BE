const Experience = require("../models/experience");

const getAllExperiences = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const skip = (page -1) * limit;
  // const endIndex = page*limit;
  let query =  Experience.find();
  


  query = query.skip(skip).limit(limit);
  

  
  const countExperiences =  await Experience.find( ).countDocuments() // total docs
    if (page && skip > countExperiences)
      return res.send("Out of range")

    // execute

    // res.json({ status: "success", data: exps, count: countExperiences }); // add countExperiences as well

    const experiences = await query
  
  // res.send(results);
res.send({ data: experiences, total: countExperiences, page: page, perpage: limit})
  
};

const createExperience = async (req, res) => {
  const title = req.body.title;
  const pictureUrl = req.body.pictureUrl;
  const country = req.body.country;
  const price = req.body.price;
  const duration = req.body.duration;
  const city = req.body.city
  const maxGroupSize = req.body.maxGroupSize
  const language = req.body.language
  const description = req.body.description
  const host = req.body.host
  const whatToBring = req.body.whatToBring
  console.log(req.body)
  const newExperience = await Experience.create({
    title,
    pictureUrl,
    country,
    price,
    duration,
    city,
    maxGroupSize,
    language,
    description,
    host,
    whatToBring,
  });
  console.log(newExperience)
  res.send(newExperience);
  // res.send("okk")

};

const updateExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findOne({
      _id: req.params.eid,
      // user: req.user._id
    });

    if (!experience)
      return res.status(404).json({
        status: "Fail",
        message: "No document found",
      });

    const fields = Object.keys(req.body);
    fields.map((field) => (experience[field] = req.body[field]));
    await experience.save();
    res.status(200).json({
      status: "Successfully updated your experience",
      data: experience,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      error: err.message,
    });
  }
};

const getSingleExperience = async (req, res) => {
  const experiences = await Experience.findById(req.params.eid);
  res.send(experiences);
};



module.exports = {
  getAllExperiences,
  createExperience,
  updateExperience,
  getSingleExperience,
};
