const path=require("path");
const controller={
//key:    value;

products:(req,res)=>{
    const pathHtml=path.resolve(__dirname,"../views/products.html");
    return res.sendFile(pathHtml);
    },

create:(req,res)=>{
    
    return res.send("create")}

};

module.exports=controller;

















