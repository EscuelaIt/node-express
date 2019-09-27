const express = require('express');
const request = require('request');
const router = express.Router();
const URL = "http://api.tvmaze.com/search/shows?q=";

router.get('/:serie', function(req, res) {
    console.log("Param!",req.params.serie);
    request(`${URL}${req.params.serie}`,(err,response,body)=>{
        if(!err){
            res.status(200).send(JSON.parse(body));
        }
    });
});

//Verbos/Acciones HTTP
router.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});
router.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
});
router.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
});
router.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});

module.exports = router;
