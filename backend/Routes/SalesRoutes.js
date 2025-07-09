const express = require("express");
const router = express.Router();
const { createSale, getDashboardData } = require("../Controllers/SalesController");

router.post("/", createSale); 

router.get("/dashboard", getDashboardData); 

module.exports = router;