
const obtenerPersonaFake = require("./library");

// Codigo funcion callback

function datosPersona(p){
    p.results.forEach(persona => {

        console.log("Nombre: " + persona.name.first + " " + persona.name.last);
        console.log("Sexo: " + persona.gender);
        console.log("Pais: " + persona.location.country);
        console.log("Estado: " + persona.location.state);
        console.log("Calle: " + persona.location.street.name);
        console.log("Numero: " + persona.location.street.number);
        console.log("CP: " + persona.location.postcode);
        console.log("Email: " + persona.email);
        console.log("Usuario: " + persona.login.username);
        console.log("Contraseña: " + persona.login.password);
})
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(datosPersona);
