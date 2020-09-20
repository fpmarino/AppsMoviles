/*Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo

hayAlgunNegativo([2,-3,9])
> True*/

var arr1 = [-1, 8,-5,2, -3, 9];
var arr2 = [9, 6, 2, 1, 6, 8];  

function hayAlgunNegativo(numeros)
{
   var valor = numeros.some(i => i < 0);
   return valor;
}

console.log(hayAlgunNegativo(arr1)); //true
console.log(hayAlgunNegativo(arr2)); //false
