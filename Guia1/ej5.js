/*Define la función aprobó, que dada la lista de las notas de un alumno devuelve si el alumno aprobó. 
Un alumno aprobó si todas sus notas son mayores o iguales a 4

aprobo([8,6,2,4])
> False*/

function aprobo(notas)
{
    return notas >= 4; 
}

console.log([1,8,5,2].every(aprobo)); // false
console.log([4,8,7,9].every(aprobo)); // true