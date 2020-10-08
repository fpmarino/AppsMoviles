const obtenerCerveceria = require ("./library");

obtenerCerveceria().then(function (c){
    console.log("Nombre: "+c.name);
    console.log("Tipo de cerveceria: "+c.brewery_type);
    console.log("Ciudad: "+c.city);
    console.log("Pais: "+c.country);
    console.log("Página web: "+c.website_url);
}).catch(function (err){
    console.log("Error"+err.message);
});