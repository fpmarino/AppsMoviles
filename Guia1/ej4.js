/*Define una función que dado un array de números nos dice si alguno es par.

algunoEsPar([1,2,3])
> true*/

function numeroPar(element) 
{
    return element % 2 === 0;     
}
  console.log([4,2,7,9,15,1,18].some(numeroPar)); // true
  console.log([1,3,5,7,9].some(numeroPar)); // false