var http = require('http');

async function getTemperatureText() {

    //Llamado a API real
    var promise = new Promise(resolve => {
        http.get('http://api.real.del.clima/api/bla', function(res){
            var body = '';
            res.on('data', function(chunk){
                body += chunk;
            });

            res.on('end', function(){
                var respuesta = JSON.parse(body);

                //Regresar texto segun la temperatura
                if (respuesta.temperatura < 15) resolve("Frio");
                else if (temperature < 24) resolve("Agradable");
                else resolve("Caliente");
            });
        }).on('error', function(e){
            //Regresar Error si hay un problema. Tiene delay de 1 segundo.
            setTimeout(()=>resolve("Error"), 1000);
        });
    });

    return promise;
}

module.exports.getTemperatureText = getTemperatureText;