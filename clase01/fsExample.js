const fs = require("fs");

//Creo un archivo en el directorio
fs.writeFile("testFile.txt","Hello World! From NodeJS",(err)=>{
    if(!err){
        console.log("File saved!");
    }
});

//Leo un archivo
fs.readFile("testFile.txt","utf-8", (err, data)=>{
    if(!err){
        console.log("File contents:", data);
    }
});

//Ejemplo mas complejo. Leo el archivo, cambio la palabra Hello por Hola y vuelvo a grabar.
fs.readFile("testFile.txt", "utf-8", (err, data)=>{
    if(!err){
        const newData = data.replace("Hello", "Hola");
        
        //Grabo el nuevo contenido
        fs.writeFile("testFile.txt", newData, err=>{
            if(!err){
                console.log("File updated!");
            }
        })
    }
});


