const Experience = require("../models/experience");

const getAllExperiences = async (req, res) => {
  const experiences = await Experience.find();
  res.send({
    status: "ok", 
    data: experiences}); // res.send(experiences); // res.send sends the data to the browser // create this object if you need to send more than 1 data point
};

const createExperience = async (req, res) => {
  // can also be written like: const { title, pictureUrl, country, price, duration } = req.body;
  const title = req.body.title;
  const pictureUrl = req.body.pictureUrl;
  const country = req.body.country;
  const price = req.body.price;
  const duration = req.body.duration;
  const newExperience = await Experience.create({
    title, // if key and value are the same, you can just take the second one
    pictureUrl,
    country,
    price,
    duration,
  });
  res.send(newExperience);
};

module.exports = { getAllExperiences, createExperience };
