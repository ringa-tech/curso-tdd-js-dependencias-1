var temperature = require('./temperature.js');

//En algun lugar de la aplicacion se utiliza
console.log("Obteniendo temperatura...");
temperature.getTemperatureText().then(r => console.log("Result: " + r));