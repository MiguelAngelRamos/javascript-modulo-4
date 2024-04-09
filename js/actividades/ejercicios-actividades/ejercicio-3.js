//* Encontrar el numero mayor de este arreglo
const numeros = [1,2,10,22];

function encontrarNumeroMayor(arreglo) {
  let numeroMayor = arreglo[0];
  for(let i=1; i<arreglo.length; i++) {
    if(arreglo[i] > numeroMayor) {
      numeroMayor = arreglo[i];
    } 
  }
  return numeroMayor;
}

console.log(encontrarNumeroMayor(numeros));