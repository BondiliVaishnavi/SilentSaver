const express=require('express');

const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());
require("dotenv").config();
 const PORT=process.env.PORT || 8080;
 app.get("/vaishnavi",(req,res)=>{
    res.send("narendar");
 })
app.listen(PORT,()=>{
    console.log(`Server is running in ${PORT}`);
})
