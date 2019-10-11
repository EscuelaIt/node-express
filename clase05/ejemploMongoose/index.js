const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.listen(PORT, ()=>{console.log(`APP Running PORT ${PORT}...`)});

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const myLogger = (req, res, next)=>{
    console.log(`LOGGER:`, req.method, req.originalUrl);
    next();
}
app.use(myLogger); //Registro el Middleware en Express

//Obtengo rutas
const users = require("./routes/users");
app.use("/users", users);

//Default
app.get("/", (req, resp)=>{
    resp.status("200").send("Gracias! dirija sus request a /users");
});