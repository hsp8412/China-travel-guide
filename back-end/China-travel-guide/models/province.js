const joi = require("joi");
const mongoose = require("mongoose");

const provinceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  regionId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  isAutonomousRegion: {
    type: Boolean,
    isRequired: true,
  },
  tags: {
    type: [String],
  },
});

const Province = mongoose.model("Province", provinceSchema, "province");

function validateProvince(province) {
  const schema = joi
    .object({
      name: joi.string().max(50).required(),
      regionId: joi.string().max(25).required(),
      isAutonomousRegion: joi.boolean().required(),
      tags: joi.array().items(joi.string().max(25)),
    })
    .unknown();
  return schema.validate(province);
}

module.exports.Province = Province;
module.exports.validateProvince = validateProvince;
