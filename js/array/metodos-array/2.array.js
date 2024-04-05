const numeros = [33, 40, 54, 67, 31, 27, 11, 20];

// const resultado = numeros.map(elemento => elemento*2);

const resultado = numeros.map(elemento => {
  return elemento * 2;
})


// console.log(resultado);

// Del arreglo multiplicar por 2 todos los divisibles por 2
console.log(numeros);
const resultadoMultiplicado = numeros.map(elemento => {
  if(elemento%2 === 0){
    return elemento*2
  } else {
    return elemento;
  }
});
console.log(resultadoMultiplicado);

//* Del arreglo multiplicar 5 todos los divisibles por 3 
const resultadoMultiplicadoDivibles3 = numeros.map(elemento => {
  if(elemento%3==0){
    return elemento*5
  }
  return elemento
});
console.log(resultadoMultiplicadoDivibles3);
//* Del Arreglo
const nombres = ["Sofia", "Catalina", "Richard"];
// agregarle "Ing de Software"

// const nombresTexto = nombres.map(elemento => {
//   // return elemento + " - Ing. de Software"
//   return `${elemento} - Ing. de Software`;
// })

const nombresTexto = nombres.map(elemento => `${elemento} - Ing. de Software`)

console.log(nombresTexto);


//* Del arreglo personas solo obtener la edad

const persona = [{nombre: 'Sofia', edad: 27}, { nombre: 'Catalina', edad: 25}];

//* Necesitamos pasar el arreglo persona por el map y obtener las edades

const nuevoArrayEdades = persona.map( elemento => {
  return elemento.edad;
});

console.log(nuevoArrayEdades);
