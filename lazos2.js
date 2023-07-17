const ciudadadesDisponibles = new Array("sonsonate", "sonzacate", "san salvador");
const preciosDisponibles = new Array(500, 400, 300);
let presupuesto = 600;
const datos = [
    {
        'ciudad':'sonsonate',
        'precio':'500'
    },
    {
        'ciudad':'sonzacate',
        'precio':'400'
    },
    {
        'ciudad':'san salvador',
        'precio':'300'
    },
];

let i = 0;
while (i < datos.length && datos[i].precio > presupuesto) {
    i++;
}

if (i == datos.length) {
    console.log("No tenemos ciudades disponibles dentro de tu presupuesto.");
} else {
    console.log("Puedes comprar el pasaje para: " + datos[i].ciudad);
}
