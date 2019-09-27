const request = require("request");
const URL = "http://api.tvmaze.com/search/shows?q=batman";

request(URL, (error, response, body)=>{
    if(!error){
        console.log(response.statusCode, JSON.parse(body));
    }
});