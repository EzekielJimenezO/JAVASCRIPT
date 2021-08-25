// Let y var la diferencia es el alcance y como actuan
document.write("<h1>Diferencias entre let y var</h1>");

let var1 = "Mexico";
let var2 = "America";

// el uso de var la profundidad es mayor y puede cambiar valores de variables local o sub fragmentos

var numero = 40;
console.log(numero);
if (true)
{
    var numero = 69;
    console.log(numero);
}
console.log(numero);

/*
//let 
let numero = 40;
console.log(numero);
if(true){//para entrar en fragmento de codigo distinto al global
    let numero = 69;
    console.log(numero);
}
console.log(numero);//???*//*
//let 
let numero = 40;
console.log(numero);
if(true){//para entrar en fragmento de codigo distinto al global
    let numero = 69;
    console.log(numero);
}
console.log(numero);//???*/