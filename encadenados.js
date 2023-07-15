const ciudadaDestino = 'san salvador';
const ciudadadesDisponibles = new Array("sonsonate", "san salvador", "sonzacate");
let edadPasajero = 17;
let estaAcompañado = false;

// verificamos si la edad del pasajero cumple las reglas
if (edadPasajero >=18 || estaAcompañado){
    //evaluamo si la segunda rama esta disponible
    if (ciudadadesDisponibles.indexOf(ciudadaDestino) >-1)  {
        console.log("pasaje disponible para viajar");
    } else {
        console.log("ciudad no disponible para viajar");
    }
}else{
    if (edadPasajero >= 16 && ciudadaDestino == 'san salvador'){
        console.log("puedes viajar a san salvador");
    }else{
        console.log("pasajero no cumple las reglas");
    }
}
