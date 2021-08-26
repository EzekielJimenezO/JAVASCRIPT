document.write("<h1>Team Las Bichotas</h1>")

var a=8;
var b=-35;
var c=-54;

//Formula Positiva
var formulaPositiva=((-b)+Math.pow(((Math.pow(b,2))-(4*(a*c))),(1/2)))/(2*a);
// Formula Negativa
var formulaResta=((-b)-Math.pow(((Math.pow(b,2))-(4*(a*c))),(1/2)))/(2*a);


console.log("Las raíces de la ecuación con los valores establecidos de: a=",a+", b=",b+", c=",c, "son:")

console.log("Con x1=",formulaPositiva)

console.log("Con x2=",formulaResta)
