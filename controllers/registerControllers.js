const path=require("path");
const controller={

register:(req,res)=>{


const pathHtml=path.resolve(__dirname,"../views/register.html");
return res.sendFile(pathHtml);
},
};
module.exports=controller;