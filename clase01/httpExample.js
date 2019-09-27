const http = require("http");

//Creo un servidor HTTP simple
// http.createServer((req, res)=>{
//     res.write("Hello World from HTTP server!");
//     res.end();
// }).listen(8080);

//Crear un WEB SERVER
http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type":"text/html"});
    res.write("<b>Hello World! from WEB SERVER</b>");
    res.end();
}).listen(8080);
