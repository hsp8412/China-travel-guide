const express = require('express');
const router = express.Router();
const {Region, validateRegion} = require("../models/region");

//Get all regions
router.get('/',  async (req, res) => {
    const result = await Region.find();
    res.send(result);
});

//Get region by id
router.get('/:id',async (req, res) => {
    const result = await Region.findById(req.params.id);
    if(!result){
        return res.status(404).send("The region with the given ID was not found.");
    }
    res.send(result);
});

//Post new region
router.post('/', async(req,res)=>{
    const {error} = validateRegion(req.body)
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    let region = await Region.findOne({name:req.body.name})
    if(region){
        return res.status(400).send("Region already exists.");
    }
    region = new Region(req.body)
    await region.save()

    res.send(region)
})

module.exports = router;