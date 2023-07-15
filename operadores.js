const ciudadaDestino = 'sonzacate';
const ciudadadesDisponibles = new Array("sonsonate", "sonzacate", "san salvador");



//para ver si el alumno esta reprobado
// const reprovados = 'alejandro';
// const alumnos = ['roberto', 'carlos', 'daniel', 'oscar']

// if (alumnos.indexOf(reprovados) >=0) {
//     console.log('el alumno esta reprovado');
// } else {
//     console.log('el alumno esta aprovado');
// }

// marcas de telefono

// const telefono = 'xiomi';
// const marcas = ['san sun', 'xiomi', 'aifon', 'hawey'];
// if (marcas.indexOf(telefono) >=0) {
//     console.log("omar se la come");
// } else {
//     console.log('tu telefono es god');
// }

const edadPasajero = 17;
const estaAcompañado = false;
console.log(`verificando pasajes para ${ciudadaDestino}`);

    if(ciudadadesDisponibles.indexOf(ciudadaDestino) >= 0 && 
      (edadPasajero >= 18 || estaAcompañado)){
        console.log("pasaje disponible para venta");
    }else{
        console.log("pasaje no disponibre para venta o no cumples con los requisito");
    }

