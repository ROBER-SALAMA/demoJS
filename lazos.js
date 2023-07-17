const ciudadadesDisponibles = new Array("sonsonate", "sonzacate", "san salvador");
const preciosDisponibles = new Array(500, 400, 300);
let presupuesto = 560;

let i = 0;
while (preciosDisponibles[i] > presupuesto && i < ciudadadesDisponibles.length) {
    i ++;
}
if (i == ciudadadesDisponibles.length) {
    console.log("no tenemos ciudades disponibles");
} else {
    console.log("puedes comprar el pasaje para: " + ciudadadesDisponibles[i]);
}
