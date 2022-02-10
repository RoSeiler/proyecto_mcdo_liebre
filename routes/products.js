const express=require("express"); //necesito requerir a express para despues poder ejecutar el metodo Router()
const router=express.Router();



//todo lo que tiene este archivo ahora empieza /products, por eso lo omito
// requerimos el controller de productsController:
const controller=require("../controllers/productsControllers");

router.get("/",controller.products);//cuando usen esta ruta, anda a la avriable controller que te lleva a las rutas y de ahi agarra el metodo products

router.get("/create",controller.create);//cuando vayan a esta ruta anda a controller que te dirige a controllers y de ahi a productsController y agarra el metodo create


module.exports=router;