const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

//Cache
//app.enable("view cache");

//Configuracion de Handlebars
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res)=>{
    res.render("home", {
        title: "Bienvenidos a mi sitio!",
        subtitle: "Gracias por venir!",
        arrLang: ["Javascript", "C#", "PHP", "Java", "Python"],
        content: "lorem etc...."
    });
});

app.get("/clientes", (req, res)=>{
    res.render("clientes");
});

//Nuevo sitio
const mysite = require("./routes/mysite");
app.use("/mysite", mysite);

//Statics
app.use(express.static("public"));

app.listen(3000);