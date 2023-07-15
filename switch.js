const ciudadaDestino = "san salvador";
const ciudadadesDisponibles = new Array(
    "sonsonate",
    "sonzacate",
    "san salvador"
);
let valorPasaje = 0;

switch (ciudadaDestino) {
    case "sonzacate":
        console.log("el valor de pasaje hacia sonzacate es: " + (valorPasaje = 500));
        break;
    case "sonsonate":
        console.log("el valor del pasaje hacia sonsonate es: " + (valorPasaje = 400));
        break;
    case "san salvador":
        console.log("el valor del pasaje hacia san salvador es: " + (valorPasaje = 300));
        break;
    default:
        break;
}
