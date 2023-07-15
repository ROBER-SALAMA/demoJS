const edadPasajero = 18;
const estaAcompañado = true;
let tienePasaporte = true;
let estaCasado = false;

const ciudadaDestino = 'sonzacate';
const ciudadadesDisponibles = new Array("sonsonate", "sonzacate", "san salvador");

console.log(`verificando pasajes para ${ciudadaDestino}`);
    if(ciudadadesDisponibles.indexOf(ciudadaDestino) >= 0 && 
      edadPasajero >= 18 && tienePasaporte && estaAcompañado == true && !estaCasado){
        console.log("paquete para solteros disponible para venta");
    }else{
        console.log("pasaje no disponibre para venta o no cumples con los requisito");
    }