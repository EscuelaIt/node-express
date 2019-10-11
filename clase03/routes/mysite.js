const express = require("express");
const request = require("request");
const router = express.Router();

router.get("/", (req, res)=>{

    //Obtener listado de usuarios
    request("https://jsonplaceholder.typicode.com/users", (err, response, body)=>{
        if(!err){
            const users = JSON.parse(body);

            res.render("mysiteHome", {
                layout:"mysite",
                users : users
            });
        }
    });

});

module.exports = router;