/*Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo

hayAlgunNegativo([2,-3,9])
> True*/

function hayAlgunNegativo(numeros)
{
    return numeros < 0;
}

console.log([-1, 8,-5,2, -3, 9].some(hayAlgunNegativo)); //true
console.log([9, 6, 2, 1, 6, 8].some(hayAlgunNegativo)); //false