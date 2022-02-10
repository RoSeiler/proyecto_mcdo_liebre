const path=require("path");
const controller={
//key:    value;

login:(req,res)=>{
    const pathHtml=path.resolve(__dirname,"../views/login.html");
    return res.sendFile(pathHtml);
    }
};



module.exports=controller;
