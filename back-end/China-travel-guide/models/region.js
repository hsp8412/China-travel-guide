const joi = require("joi");
const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Region = mongoose.model("Region", regionSchema, "region");

function validateRegion(region) {
  const schema = joi
    .object({
      name: joi.string().max(50).required(),
    })
    .unknown();
  return schema.validate(region);
}

module.exports.Region = Region;
module.exports.validateRegion = validateRegion;
