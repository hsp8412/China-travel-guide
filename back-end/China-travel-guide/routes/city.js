const express = require("express");
const router = express.Router();
const { City, validateCity } = require("../models/city");
const { Province } = require("../models/province");

//Get all cities
router.get("/", async (req, res) => {
  const result = await City.find();
  res.send(result);
});

//Get cities by province
router.get("/province/:provinceId", async (req, res) => {
  const province = await Province.findById(req.params.provinceId);
  if (!province) {
    return res
      .status(404)
      .send("The province with the given ID was not found.");
  }
  const result = await City.find({ provinceId: req.params.provinceId });
  res.send(result);
});

//Get city by id
router.get("/:cityId", async (req, res) => {
  const result = await City.findById(req.params.cityId);
  if (!result) {
    return res.status(404).send("The city with the given ID was not found.");
  }
  res.send(result);
});

//Create new city
router.post("/", async (req, res) => {
  const { error } = validateCity(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  if (req.body.provinceId) {
    const province = await Province.findById(req.body.provinceId);
    if (!province) return res.status(400).send("Invalid province.");
    console.log(province);
  }

  let city = await City.findOne({ name: req.body.name });
  if (city) {
    return res.status(400).send("Region already exists.");
  }

  city = new City(req.body);
  await city.save();

  res.send(city);
});

module.exports = router;
