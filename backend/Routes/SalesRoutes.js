const express=require("express");
const {createSale,getDashboardData}=require("../Controllers/SalesController");
const router=express.Router();
router.post("/",createSale);
router.post("/",getDashboardData);
module.exports=router;