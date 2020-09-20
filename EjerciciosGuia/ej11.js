/*Crea una clase Persona que tenga los atributos nombre y edad. Además agregale un método presentarse() que como 
resultado imprima un mensaje diciendo su nombre y edad.*/

class Persona
{
    constructor(nombre, edad) 
    {
        this.nombre = nombre;
        this.edad=edad;
    }
        

    Presentarse()
    {
        return "Mi nombre es " + this.nombre + " y tengo " + this.edad+" años";
    }


}

var p1 = new Persona("Florencia",23);
console.log(p1.Presentarse());