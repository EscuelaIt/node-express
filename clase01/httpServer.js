/*
  Creo un servidor HTTP que lee rutas y sirve un contenido especifico para cada una.
*/
const http = require('http');
const url = require('url');
const fs = require('fs');
const PORT = 9999;
const PUBLIC = '/public';

const server = http.createServer((req,res)=>{
  let pathname = url.parse(req.url,true).pathname;
  pathname = pathname == '/' ? '/index.html': pathname; //Default: index.html
  console.log(req.method, pathname); //Log de la app en pantalla

  //Log en archivo.
  fs.appendFile("server.log", req.method + " " + pathname +"\n" ,(err)=>{
    if(err) console.log("Log error");
  });

  //Intento leer el contenido del request y pasarlo al cliente
  fs.readFile(__dirname + PUBLIC + pathname, (err, data)=>{

    //Verifico si el archivo no existe
    if(err){
      res.writeHead(404, {'Content-Type':'text/plain'});
      res.end('404 - Not Found!');
    }

    //Genero la salida al cliente con el contenido del archivo
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(data);
  });

});

server.listen(PORT);
console.log('Server running in port:' + PORT);