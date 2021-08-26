document.write("<h1>Menu</h1>");

var comida = 2;
var bebida = 1;
var NoComida = 5;
var NoBebida = 12;

console.log("Elige un platillo");
console.log("1-Nachos $30");
console.log("2-Pizza $120");
console.log("3-Tacos $10");

console.log("Elige una bebida");
console.log("1- Agua $15");
console.log("2- Refresco $30");
console.log("Cerveza");
console.log("3-Corona 30");
console.log("4-Victoria &35");
console.log("5- Cucapa $50");
switch(comida)
{
    case 1:        
        var cuentaComida = NoComida * 30 ;
        console.log ("El platillo elegido son NACHOS y el total de platillos elegidos son:", NoComida, ","," El Costo total de los platillos es de:", cuentaComida );
        break;
    case 2: 
        var cuentaComida = NoComida * 120 ;
        console.log ("El platillo elegido es PIZZA y el total de platillos elegidos son:", NoComida, ","," El Costo total de los platillos es de:", cuentaComida );
        break;
    case 3: 
        var cuentaComida = NoComida * 10 ;
        console.log ("El platillo elegido son TACOS y el total de platillos elegidos son:", NoComida, ","," El Costo total de los platillos es de:", cuentaComida );
        break;
    default:
        alert("El platillo elegido no fue correcto");

}


switch(bebida)
{
    case 1: 
        var cuentaBebida = NoBebida * 15 ;
        console.log ("La bebida elegida es AGUA FRESCA y el total de bebidas elegidas son:", NoBebida, ","," El Costo total de las bebidas es de:", cuentaBebida );
        break;
    case 2: 
        var cuentaBebida = NoBebida * 30 ;
        console.log ("La bebida elegida es Refresco y el total de bebidas elegidas son:", NoBebida, ","," El Costo total de las bebidas es de:", cuentaBebida );
        break;  
    case 3: 
        var cuentaBebida = NoBebida * 30 ;
        console.log ("La bebida elegida es Cerveza Corona y el total de bebidas elegidas son:", NoBebida, ","," El Costo total de las bebidas es de:", cuentaBebida );
        break;
    case 4: 
        var cuentaBebida = NoBebida * 35 ;
        console.log ("La bebida elegida es Cerveza Victoria y el total de bebidas elegidas son:", NoBebida, ","," El Costo total de las bebidas es de:", cuentaBebida );
        break;
    case 5: 
        var cuentaBebida = NoBebida * 50 ;
        console.log ("La bebida elegida es Cerveza CUCAPA y el total de bebidas elegidas son:", NoBebida, ","," El Costo total de las bebidas es de:", cuentaBebida );
        break;
    default:
        alert("La bebida elegida no fue la correcta");
}


var CuentaFinal = cuentaComida + cuentaBebida;

console.log("El total de la cuenta de comida y bebida es de:", CuentaFinal);