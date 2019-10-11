const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//1 - Conex DB
mongoose.connect("mongodb://127.0.0.1/demo");

//2 - Traer el modelo
const User = require("../models/users");

//3 - Listado de Usuarios
router.get("/", (req,res)=>{
    console.log("Listado Usuarios");
    User.find((err, users)=>{
        res.send(users);
    });
});

//4 - Traer un usuario
router.get("/:id", (req,res)=>{
    User.findOne({"id":req.params.id},(err, user)=>{
        if(!err && user){
            res.status("200").send(user);
        }
        else{
            res.status("404").send("404 - NO USER FOUND!");
        }
    });
});

//5 - Agregar Usuario
router.post("/", (req, res)=>{
    console.log("Agregar Usuario");
    const user = new User();
    console.log("BODY", req.body);

    user.id = req.body.id;
    user.name = req.body.name;
    user.username = req.body.username;
    user.email = req.body.email;

    user.save((err, doc)=>{
        if(!err && doc){
            res.send("New User!");
        }
        else{
            res.status("400").send("Params Error");
            console.log("New User Error", err);
        }
    });
});

//6 - Editar Usuario
router.post("/:id", (req, res)=>{
    console.log("Edito Usuario");
    //TODO Validar el body
    User.findOneAndUpdate({"id":req.params.id}, {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email
    },(err,doc)=>{
        if(!err && doc){
            res.send("UPDATED USER!")
        }
        else{
            res.status("400").send("Params Error");
        }
    });

});

//7 - Eliminar Usuario
router.delete("/:id", (req, res)=>{
    User.findOneAndDelete({"id":req.params.id}, (err, doc)=>{
        if(!err){
            res.send(`USER ${req.params.id} DELETED`);
        }else{
            res.status("404").send("USER NOT FOUND!")
        }
    })
})

module.exports = router;