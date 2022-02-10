const express=require("express"); 
const router=express.Router();

const controller=require("../controllers/usersControllers");

router.get("/",controller.users)
router.get("/create",controller.users)







module.exports=router;