// aca van las rutas genericas, tipo el contact us, about us

const express=require("express");
const router=express.Router();

//importo el controller
const controller=require("../controllers/mainControllers")

//me lleva a la home(el localhost):
router.get("/",controller.home);//de controller, el objeto L. uso el metodo index

//ruta q me lleva a contact:
router.get("/contact",controller.contact);
module.exports=router;