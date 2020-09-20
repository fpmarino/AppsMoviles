/*Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen

// even es una función que retorna true si un número es par (deben crearla)
cuantosCumplen(even,[7,9,25,42])
> 1 //Solo 42 es par*/

var even = function(element) 
{ 
    if(element % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
};

var arr = [2, 6, 7, 3, 1];
var cuantosCumplen = function (funcion, arr)
{
    var y=0;
    arr.forEach(i => {
        if(funcion(i) == true)
        {
            y++;
        }
    });
    if(y  === 0){
        return "Sin numero pares";
    }else if(y > 1){
        return "Hay "+y+" numeros pares";
    }

}

console.log(cuantosCumplen(even, arr));
