const Detail = require("../models/detail");

const getAllDetail= async (req, res) => {
  const details = await Detail.find();
  res.send(details); 
};

const createDetail = async (req, res) => {
  const city = req.body.city;
  const maximumGroupSize = req.body.maximumGroupSize;
  const language = req.body.language;
  const description = req.body.description;
  const hostDetails = req.body.hostDetails;
  const whatToBring = req.body.whatToBring;
  console.log(req.body)
  const newDetail = await Detail.create({
   city,
   maximumGroupSize,
   language,
   description,
   hostDetails,
   whatToBring
  });
  console.log(newDetail)
  res.send(newDetail);
 

};

const updateDetail = async (req, res, next) => {
  try{
    const detail = await Detail.findOne({
      _id: req.params.did,
      // user: req.user._id
    })

    if(!detail) return res.status(404).json({
      status: "Fail",
      message: "No document found"
    })

    const fields = Object.keys(req.body);
    fields.map(field => detail[field] = req.body[field])
    await detail.save()
    res.status(200).json({
      status: "Successfully updated your details",
      data: detail
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      status: "error",
      error: err.message
    })
  }
}


module.exports = { getAllDetail, createDetail, updateDetail };
