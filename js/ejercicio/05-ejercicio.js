// Vamos a ingresar por pantalla una cantidad de dias, a cuantos años equivale, cuantas semanas y dias

// 400 dias cuantos años es 400 dias?? 


const AÑO = 365;
const SEMANA = 7;

let totalDias = prompt("Introduce la cantidad dias"); // prompt lo que hace es que devuelve un "string" 
totalDias = parseInt(totalDias);

let equivalente_años = Math.floor(totalDias/AÑO);
let diasRestantes = totalDias % AÑO; // 600 % 365

// a Cuantas semanas equivalen los dias restantes?
let semanas = Math.floor(diasRestantes/SEMANA)
console.log('Equivalente a : ' + semanas);
let dias = diasRestantes % 7;

console.log(totalDias + " dias son: " + equivalente_años + "años, " +  semanas +  "semanas y " + dias + " dias. ");
alert(totalDias + " dias son: " + equivalente_años + " año, " +  semanas +  " semanas y " + dias + " dias. ")