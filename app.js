const express= require("express");
const path = require("path");
const app=express();


//setup template engine-para view engine quiero ejs-
app.set("view engine", "ejs");

app.listen(process.env.PORT || 3000,function(){
    console.log("Servidor corriendo en el puerto 3000");
})


app.use(express.static("public"));


//app.get("/",(req,res)=>{return res.render("home")});

//me traigo las routes:

//de main:
const mainRoutes=require("./routes/main");
app.use("/",mainRoutes);//le digo a app que cuando pidan algo a /(/contact,/about us, etc) usa la const mainRoutes


//requerimos el archivo de rutas products.js
const productsRoutes=require("./routes/products");
app.use("/products",productsRoutes);//cuando pidan "/products" andá productRoutes que tiene la ruta necesaria


//requerimos el archivo de rutas users.js
const usersRoutes=require("./routes/users");
app.use("/users",usersRoutes);

//requerimos login
const loginRoutes=require("./routes/login");
app.use("/login",loginRoutes);

//requerimos register
const registerRoutes=require("./routes/register");
app.use("/register",registerRoutes);



/* 
Esto haciamos antes del ejs:

app.use(express.static(path.resolve(__dirname,"public")));
//tmb se puede poner asi:   app.use(express.static("public"));
//el path resove me da la ruta completa de la carpea public, con el static estoy diciendo que los archivos son estaticos y express debe darlos a la vista y con mi app le digo...ver video
app.get("/", (req,res)=>{
    const pathHtml=path.resolve(__dirname,"views/home.html");
    res.sendFile(pathHtml);
    
})

app.get("/login ",(req,res)=> { 
    const pathHtml = path.resolve(__dirname,"views/login.html");
    res.sendFile(pathHtml)
})

app.get("/register", (req, res) => {  
	const pathHtml=path.resolve(__dirname,"views/register.html");
    res.sendFile(pathHtml);
})
*/




