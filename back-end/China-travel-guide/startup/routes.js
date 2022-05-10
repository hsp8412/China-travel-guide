const express = require("express");
const cors = require("cors");
const path = require("path");

const facility = require("../routes/facility");
const product = require("../routes/product");

const city = required("../routes")

module.exports = function (app) {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use("/branch_staff", branchStaff);
};
