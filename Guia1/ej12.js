/*Crea una clase Estudiante (que herede de Persona) que tenga un atributo profesor y tenga dos métodos.
El método estudiando() que imprime el mensaje “Estudiando con ” y el nombre del profesor con el que se encuentra
estudiando. El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando.*/


class Persona 
{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    Presentarse() {
        console.log("Hola, mi nombre es "+ this.nombre+ " y tengo "+this.edad+ " años.")
    }
}

class Estudiante extends Persona
{
    constructor(nombre,edad,profesor=null){
        super(nombre,edad); 
        this.profesor = profesor;
    }
    setProfesor(profesor) {
        this.profesor = profesor;
    }
    Estudiando() {
        if(this.profesor !== null) {
            console.log("Estudiando con "+this.profesor.nombre);
        }
    }
}

class Profesor extends Persona
{
    constructor(nombre, edad){
        super(nombre, edad);
    }
}



p1 = new Profesor ("Misael", 33);
p2 = new Profesor ("Elda", 54);

e1 = new Estudiante ("Florencia", 23, p1);
e1.Estudiando();

e2 = new Estudiante ("Juan", 25, p1);
e2.Estudiando();

e2.setProfesor(p2);
e2.Estudiando();

