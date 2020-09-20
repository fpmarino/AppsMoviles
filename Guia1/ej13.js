/*Crea una clase Profesor (que herede de Persona) que tenga un atributo estudiantes con un array de Estudiante. 
Además debe tener dos métodos enseñando() que imprima por consola todos sus estudiantes a los cuales les está 
enseñando y el método addEstudiante(unEstudiante) que agregue a ese estudiante a la lista. Además este método es 
responsable de manejar de agregar al objeto profesor como profesor del estudiante (manejo de doble referencia)*/

class Persona 
{
    constructor(nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() 
    {
        console.log("Mi nombre es "+this.nombre+" y tengo "+this.edad+ " años.")
    }
}

class Estudiante extends Persona
{
    constructor(nombre, edad, profesor=null)
    {
        super(nombre,edad); 
        this.profesor = profesor;
    }
    setProfesor(profesor) 
    {
        this.profesor = profesor;
    }
    estudiando()
    {
        if(this.profesor !== null) 
        {
            console.log("Estudiando con "+this.profesor.nombre);
        }
    }
}

class Profesor extends Persona
{
    constructor(nombre, edad)
    {
        super(nombre,edad);
        this.estudiantes = [];
    }
    enseñando() 
    {
        if(this.estudiantes.length>0)
        {
            console.log("Alumnos: ");
            this.estudiantes.forEach(estudiante => console.log(estudiante.nombre)); 
        }
    }
    addEstudiante(unEstudiante)
    {
        this.estudiantes.push(unEstudiante);
        unEstudiante.setProfesor(this);
    }
}

e1 = new Estudiante("Florencia", 23);
e2 = new Estudiante("Sergio", 32);


p1 = new Profesor("Misael", 34);
p1.addEstudiante(e1);
p1.addEstudiante(e2);


p1.enseñando();
e1.estudiando();
