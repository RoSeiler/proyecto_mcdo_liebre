const path=require("path")
const controller={
    home:(req,res)=>{
        return res.send("esta es la home");
        
    },
    contact:(req,res)=>{
        return res.send("pagina de contactos");
    }
}


module.exports=controller;