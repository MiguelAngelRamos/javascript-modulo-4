//* uso de funciones y de arreglo
//* []
// () => o funcion(){}
//* ingresar numero "cualquier-numero"

//* Ejercicio 1
function crearArregloDoble(interaciones) {
  const arreglo = [1];
  // Este va ser resultado cuando n= 3 
  //* const arreglo = [1, 2, 4];
  for(let i=1; i<interaciones; i++) {
    arreglo[i] = arreglo[i-1] * 2;
  }
  return arreglo;
}

console.log(crearArregloDoble(5));

//* Ejercicio 2
//* Encontrar el valor maximo y minimo del arreglo numeros
const numeros = [1,2,10,22];
const otroArregloNumeros = [...numeros]; //* creo un nuevo con todos los valores dle arreglo "numeros"
console.log(Math.max(...numeros)) // el valor maximo
console.log(Math.min(...numeros)) // el valor minimo