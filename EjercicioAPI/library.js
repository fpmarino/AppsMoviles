const request = require("request-promise");



var options = {
        uri: "https://api.openbrewerydb.org/breweries",
        json: true
}



function obtenerCerveceria(){
    return rp(options);
}

module.exports = obtenerCerveceria;