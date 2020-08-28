/*Define la función quienesAprobaron, que dada la información de un curso devuelve la información de los alumnos
que aprobaron. Podés usar la función que hiciste en el ejercicio anterior.

quienesAprobaron([[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]])
> [[7,9,4,5],[9,6,7,10]]*/

arr = ([8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]);
function quienesAprobaron(notas )
{
    return notas >= 4; 
}

filtrado = arr.filter(quienesAprobaron);

console.log(filtrado);
