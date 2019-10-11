//Setup del servidor
const express = require("express");
const app = express();
const http = require("http").Server(app);

//Agrego socket.io
const io = require("socket.io")(http);

//Enviar cliente html
app.get("/", (req, res)=>{
    res.sendfile(__dirname + "/public/index.html");
});

//Escuchando en el socket por mensajes
io.on("connection", (socket)=>{
    socket.on("chat message", msg=>{
        io.emit("chat message", msg);
        console.log("Mensaje:", msg);
    })
});

http.listen(3000, ()=>{
    console.log("Server corriendo en PORT 3000...");
})