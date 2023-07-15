let resultado = 10 + 5 * 2;
console.log(resultado);

let resultado2 = (10 + 5) * 2;
console.log(resultado2);

let pasaporte = 10 + 20;
console.log("su pasapore es: " + pasaporte);

let nombre = 'Roberto';
let apellido = 'salama';


console.log("el nombre completo es: " + nombre + " " + apellido);
console.log(`El nombre completo es: ${nombre} ${apellido}`); 
console.log(`el resultado es ${resultado}`);

let ciudades = ['sonsonate', 'san salvador', 'acajutla']


const departameto = new Array("sonsonate", "santa ana", "san salvador");

departameto.push("la union", "san vicente");
ciudades.push('san miguel');
departameto.unshift("usulutan");
ciudades.unshift('santa tecla');
departameto.splice(1,2,"la union", "santa tecla")
ciudades.splice(1,2,"soyapango", "ilopango")

// mostrando el primer elemento de la lista
console.log(departameto[0]);
console.log(ciudades[0]);
console.log(departameto);
console.log(ciudades);





