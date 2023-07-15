let ciudades = ['chalatenango', 'usulutan'];
let departametos = new Array("la libertad", "la paz")
departametos.push('sonsonate', 'santa ana');
ciudades.unshift('la union', 'san vicente');
const cantidad = ciudades.length;

departametos.shift();
ciudades.pop();

console.log(ciudades.sort());
console.log(departametos.sort());
console.log(`En la lista de ciudads tenemos ${cantidad} elementos`);
console.log(`la cantidad de departaments es ${departametos.length} cantidades`);

let arreglo = [1,2,3,4,5];
console.log(`la cantidad es ${arreglo.length} cantidades`);

const depaFiltrado = departametos.filter((e) => e == 'la paz' || e == 'sonsonate');
console.log(depaFiltrado);

const ciudadFiltrada = ciudades.filter((c) => c == 'la union' || c == 'chalatenango');
console.log(ciudadFiltrada);

