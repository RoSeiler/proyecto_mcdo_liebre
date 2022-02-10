const express=require("express"); 
const router=express.Router();

const controller=require("../controllers/registerControllers");

router.get("/",controller.register);







module.exports=router;