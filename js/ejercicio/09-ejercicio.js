function fibonacciHastaNumero() {
  let serie = [0, 1]; // la longitud 2 (la cantidad de elementos)
  // para obtener el ultimo elemento de una array calculando la longitud restandole 1
  // un ciclo while
  while(true) {
    let numeroSiguiente = serie[serie.length-1] + serie[serie.length - 2]
    if(numeroSiguiente < 20) {
      serie.push(numeroSiguiente); // serie = [0, 1, 1]
    } else {
      break; // quebramos el ciclo no se ejecuta mas, por que el numero siguiente es mayor que 20
    }
  }
  return serie; 
}

console.log(fibonacciHastaNumero());
