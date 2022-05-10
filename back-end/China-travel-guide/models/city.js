const mongoose = require('mongoose');
const joi = require('joi')
const {string} = require("joi");

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    population:{
        type:Number,
        required:true
    },
    hasInternationalAirport: {
        type: Boolean,
        required: true
    },
    airport:{
        type:[String],
    },
    hasTrainStation: {
        type: Boolean,
        required: true
    },
    trainStation:{
        type:[String]
    },
    hasRapidTransit:{
        type:Boolean,
        required:true
    },
    tags:{
        type:[String],
    },
    provinceId: {
        type: mongoose.Types.ObjectId,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

const City = mongoose.model("City", citySchema, "city");

function validateCity(city) {
    const schema = joi.object({
        name: joi.string().required().max(50),
        population:joi.number().required().max(30000000),
        hasInternationalAirport:joi.boolean().required(),
        airport:joi.array().items(joi.string().max(100)),
        hasTrainStation:joi.boolean().required(),
        trainStation:joi.array().items(joi.string().max(100)),
        hasRapidTransit:joi.boolean().required(),
        tags:joi.array().items(joi.string().max(50)),
        provinceId:joi.string().required().max(25),
        image:joi.string().required().max(2048),
        description:joi.string().max(300).required()
    }).unknown(true);
    return schema.validate(city);
}

module.exports.City = City;
module.exports.validateCity = validateCity;