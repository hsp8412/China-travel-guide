const express = require('express');
const router = express.Router();
const {Season, validateSeason} = require("../models/season");
const {Region} = require("../models/region");

//Get all seasons
router.get('/',  async (req, res) => {
    const result = await Season.find();
    res.send(result);
});

//Get season by id
router.get('/:id',async (req, res) => {
    const result = await Season.findById(req.params.id);
    if(!result){
        return res.status(404).send("The season with the given ID was not found.");
    }
    res.send(result);
});

//Post new season
router.post('/', async(req,res)=>{
    const {error} = validateSeason(req.body)
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    let season = await Season.findOne({name:req.body.name})
    if(season){
        return res.status(400).send("Season already exists.");
    }

    season = new Season(req.body)
    await season.save()

    res.send(season)
})

module.exports = router;