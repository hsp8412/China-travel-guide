const express = require('express');
const router = express.Router();
const {Province, validateProvince} = require("../models/province");
const {validateRegion, Region} = require("../models/region");

//Get all provinces
router.get('/',  async (req, res) => {
    const result = await Province.find();
    res.send(result);
});

//Get province by id
router.get('/:id',async (req, res) => {
    const result = await Province.findById(req.params.id);
    if(!result){
        return res.status(404).send("The province with the given ID was not found.");
    }
    res.send(result);
});

//Post new province
router.post('/', async(req,res)=>{
    const {error} = validateProvince(req.body)
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    const region = await Region.findById(req.body.regionId)
    if(!region){
        return res.status(400).send("Invalid region ID.");
    }
    console.log(region)

    let province = await Province.findOne({name:req.body.name})
    if(province){
        return res.status(400).send("Province already exists.");
    }

    province = new Province(req.body)
    await province.save()

    res.send(province)
})

module.exports = router;