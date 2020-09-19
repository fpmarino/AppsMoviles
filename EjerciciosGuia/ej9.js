/*Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la 
cumplen

rechazar(even,[7,9,87,42])
> [7, 9, 87]*/

function even(element)
{
    return element %2 === 0;
}
function rechazar(condicion,array)
{
    var noCumple = array.filter(element => !condicion(element));
    return noCumple;
}
console.log(rechazar(even,[4, 3, 62, 5, 87, 92]));