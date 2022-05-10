const joi = require('joi');
const mongoose = require('mongoose');

const mustDoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    seasonsId:{
        type:[mongoose.Types.ObjectId]
    },
    cost:{
        type:Number
    },
    tags:{
        type:[String]
    },
    cityId:{
        type:mongoose.Types.ObjectId,
        required:true
    }
});

const MustDo = mongoose.model('MustDo', mustDoSchema, "mustDo");

function validateMustDo(mustDo) {
    const schema = joi.object({
        name:joi.string().max(100).required(),
        description:joi.string().max(1000).required(),
        image:joi.string().max(2048).required(),
        seasonsId:joi.array().items(joi.string().max(25)),
        cost:joi.number().max(1000),
        tags:joi.array().items(joi.string().max(25)),
        cityId:joi.string().max(25).required()
    }).unknown();
    return schema.validate(mustDo);
}

module.exports.MustDo = MustDo;
module.exports.validateMustDo = validateMustDo;