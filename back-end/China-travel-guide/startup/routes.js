const express = require("express");
const cors = require("cors");

const city = require("../routes/city");
const mustDo = require("../routes/mustDo");
const province = require("../routes/province");
const region = require("../routes/region");
const season = require("../routes/season");


module.exports = function (app) {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use("/api/city", city);
    app.use("/api/mustDo", mustDo);
    app.use("/api/province", province);
    app.use("/api/region", region);
    app.use("/api/season", season);
};
