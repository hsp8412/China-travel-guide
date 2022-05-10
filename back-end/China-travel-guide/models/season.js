const joi = require('joi');
const mongoose = require('mongoose');

const seasonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
});

const Season = mongoose.model('Season', seasonSchema, "season");

function validateSeason(season) {
    const schema = joi.object({
        name:joi.string().max(50).required(),
    }).unknown();
    return schema.validate(season);
}

module.exports.Season = Season;
module.exports.validateSeason = validateSeason;