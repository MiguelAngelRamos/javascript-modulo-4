//* Una constante es un tipo variable que no cambia su valor

const IVA = 0.19;

const nombres = ['Sofia', 'Catalina', 'Pedro', 'Miguel', 'Sebastian', 'Italo', 'Cesar', 'Maria', 'Bernardita', 'Carmen', 'Danae', 'Silvia', 'Macarena', 'Ingnacio', 'Luis', 'Rodolfo', 'Rene'];
      // indice    0    ,    1
console.log(`Este es el ultimo elemento del array nombres: ${nombres[nombres.length - 1]}`) // sin importar cual es su longitud siempre obtengo el ultimo elemento del arreglo.

// console.log(nombres[0]);
// console.log(nombres[1]);
// console.log(nombres[2]);
// console.log(nombres[3]);
// console.log(nombres[4]);
// console.log(nombres[5]);
// console.log(nombres[6]);
// console.log(nombres[7]);
// console.log(nombres[8]);
// console.log(nombres[10]);
// console.log(nombres[11]);
// console.log(nombres[12]);
// console.log(nombres[13]);
//* como acceso al el nombre sofia?
//* For (Para) for loop

//*  i = i + 1 "es igua a: "  i++
// i es indice
// nombres.length es 17
for(let i=0; i < nombres.length; i++) {
  console.log(nombres[i]); // nombres[2]
}

// console.log("cantidad de elementos: " + nombres.length);

// input id="numero"
// const value = parseInt(getElementById('numero').value)

// const nombre = obtenerNombreArray(value);
// console.log(nombre);

// function obtenerNombreArray(value) {
//   return nombres[value];
// }
