/*
Define la función contiene que dado un elemento y una lista, nos diga si la lista contiene al elemento

contiene(8,[7,8,9])
> True
*/

function contiene(numero,array)
{
    return array.some(element => element === numero);
}
console.log(contiene(8,[7,8,9])); //true
console.log(contiene(5,[7,8,9])); //false

