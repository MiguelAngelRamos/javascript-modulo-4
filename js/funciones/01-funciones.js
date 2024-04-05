//* Las funciones son un pedazo de codigo reutilizable y deberian cumplir una unica responsabilidad y demas tienen la posibilidad de retornar un valor si lo deseas, las funciones pueden recibir parametros pero tambien pueden no recibirlos.

//* Función Tradicional

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

// let resultado = sumar(10, 2);

// console.log(resultado);

//* Funciones de flechas

const sumar = (numero1, numero2) => {
  let resultado = numero1 + numero2;
  return resultado;
}
const sumar = (numero1, numero2) => {
  return numero1 + numero2;
}
const sumar = (numero1, numero2) => numero1 + numero2;

let resultado = sumar(88, 454);
console.log(resultado);
