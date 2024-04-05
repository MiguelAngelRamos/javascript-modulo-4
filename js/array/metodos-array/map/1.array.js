//* El método map() crea un nuevo array, el array resultante tiene una modificación por cada elemento.

const numeros = [1, 2, 3, 4, 5];
[2, 4, 6, 8, 10]
let nuevoArray = numeros.map(function(elemento, indice, array) {
  // console.log(indice);
  // console.log(array);
  // if(indice >= 1) {
  //   console.log(numeros[indice]);
  //   return elemento * 777;
  // }
  return elemento * 2;
})

console.log(nuevoArray);
// let nuevoArray2 = numeros.map(elemento => {
//   return elemento*2;
// })

// console.log(nuevoArray2);
// console.log(nuevoArray);//* [2, 4, 6, 8, 10]