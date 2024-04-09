/**
 * Función reciba un numero y el porcentaje
 * y que retorne el valor del numero en relacion al porcentaje
 * 
 */
//* 1000 es el numero y 15 es el (15%)
//* 1000, 15 -> que valor es el 15% de 1000? la funcion deberia retornarme 150.
//* Dejar 10 min para lo puedan realizar a 11:02 a las 11:12 vengo solución.
//* 11:24 adicional para terminar

function calculoDePorcentaje (numero, porcentaje) {
  return (numero * porcentaje) /100;
}
let numero1 = 30000;
let numero2 = 15;
let resultado = calculoDePorcentaje(numero1, numero2);

console.log(resultado)

function calculoPorcentaje(numero, porcentaje) {
  return `Èl ${porcentaje}% de ${numero} es ${numero * (porcentaje/100)}`;
}

console.log(calculoPorcentaje(30000, 15));
