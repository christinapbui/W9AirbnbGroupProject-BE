const Experience = require("../models/experience");

const getAllExperiences = async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page -1) * limit;
  const endIndex = page*limit;
  const experiences = await Experience.find();
  const results ={};

  if(endIndex<experiences.length){
    results.next ={
      page: page +1,
      limit: limit
    }
  }else{
    return res.status(400).json({message: "Page number out of range"})
  }

  
  if(startIndex>0){
    results.previous ={
      page: page -1,
      limit: limit
    }
  }else{
    return res.status(400).json({message: "Page number out of range"})
  }
  

  
    results.results = experiences.slice(startIndex,endIndex)
    

  
  res.send(results);

  
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
  const whatToBring = eq.body.whatToBring
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
