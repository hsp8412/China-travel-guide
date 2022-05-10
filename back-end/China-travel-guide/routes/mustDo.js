const express = require('express');
const router = express.Router();
const {MustDo, validateMustDo} = require("../models/mustDo");
const {City} = require("../models/city");
const {Season} = require("../models/season");

//Get all mustDos
router.get('/',  async (req, res) => {
    const result = await MustDo.find();
    res.send(result);
});

//Get mustDo by id
router.get('/:id',async (req, res) => {
    const result = await MustDo.findById(req.params.id);
    if(!result){
        return res.status(404).send("The must-dos with the given ID was not found.");
    }
    res.send(result);
});

//get mustDos by city
router.get('/:cityId', async(req,res)=>{
    const city = await City.findOne(req.params.cityId)
    if(!city){
        return res.status(404).send("The given city is not valid.")
    }
    const result = MustDo.find({cityId:req.params.cityId})
    res.send(result)
})

//get mustDos by season and city
router.get('/:cityId/:seasonId', async (req,res)=>{
    const city = await City.findOne(req.params.cityId)
    if(!city){
        return res.status(404).send("The given city is not valid.")
    }

    const season = await Season.findOne(req.params.seasonId)
    if(!city){
        return res.status(404).send("The given season is not valid.")
    }

    const result = MustDo.find({seasonId :req.params.seasonId, cityId:req.params.cityId})
    res.send(result)
})

//Post new mustDo
router.post('/', async(req,res)=>{
    const {error} = validateMustDo(req.body)
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    if(req.body.seasonId){
        const season = await Season.findById(req.body.seasonId)
        if(!season){
            return res.status(400).send("Invalid season ID.")
        }
    }

    const city = await City.findById(req.body.cityId)
    if(!city){
        return res.status(400).send("Invalid city ID.")
    }

    const mustDo = new MustDo(req.body)
    await mustDo.save()

    res.send(mustDo)
})

module.exports = router;