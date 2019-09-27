//Traigo la dependencia
const express = require("express");

const PUBLIC = 'public';
const app = express();
const PORT = 4004;

//4) helmet
const helmet = require("helmet");
app.use(helmet());

//5) Body Pasing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//1) Inicializo la app
app.listen(PORT,()=>{console.log(`App running on port ${PORT}...`)});

//3) Middlewares
//Creo la funcion middleware
const myLogger = (req,res,next)=>{
  console.log(`LOGGER:${req.method} ${req.originalUrl}`);
  next();
}
//La attacheo a la app ANTES del ruteo
app.use(myLogger);

//Puedo enriquecer los objetos usando mw y pasarlos
const requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
}
app.use(requestTime);

//2) Manejo de rutas

//6) Traigo ejemplo de API REST
const series = require("./series");
app.use("/series", series);

// app.get("/", (req,res)=>{
//     console.log(`${req.method} ${req.originalUrl} ${req.requestTime}`); //Loguea en consola
//     console.log(req.method, pathname); //Log de la app en pantalla
// });

//Serve static files
app.use(express.static(PUBLIC));

app.get("/info", (req,res)=>{
  res.send("Me pediste info, pero no tengo nada");
});

app.post("/", (req,res)=>{
  console.log(req.body);
  res.send("Llego un POST!");
});

//RegExp
app.get(/mario/,(req,res)=>{
  res.send("Pediste algo con mario en la URL");
});

//Route params
app.get("/users/:userId/books/:bookId", (req,res)=>{
  res.send(`Llego esto por route params... ${JSON.stringify(req.params)}`);
});
