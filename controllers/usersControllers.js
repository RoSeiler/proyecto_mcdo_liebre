const path=require("path");
const controller={
//key:    value;

users:(req,res)=>{
    const pathHtml=path.resolve(__dirname,"../views/users.html");
    return res.sendFile(pathHtml);
    },

create:(req,res)=>{
    const pathHtml=path.resolve(__dirname,"../views/users.html");
    return res.send("create")}

};

module.exports=controller;