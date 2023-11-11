const express=require("express");
const router=express.Router();

//Import Cintroller
const {dummyLink}=require("../controller/LikeController");
//mapping create
router.get("/dummyroute",dummyLink)

//exports
module.exports=router;