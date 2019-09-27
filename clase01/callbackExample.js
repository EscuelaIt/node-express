function sayHi(){
    console.log("Hi from timeout!");
}

function sayBye(){
    console.log("Bye Bye!")
}

setTimeout(sayHi, 2000);
sayBye();