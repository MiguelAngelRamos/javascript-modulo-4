//* ana, ojo, salas, reconocer
//* ES6 con funciones de flecha

const palabra = prompt("Escriba el palindromo");
// const palabra = "ReCoNoCer";
//* reconocer
//* Reconocer
//* RecOnocer

const esUnPalindromo = (palabra) => {
  const palindromo = palabra.toLowerCase(); // toLowerCase transforma todo a minuscula
  // const observarInverso = palindromo.split('').reverse();
  // console.log(observarInverso);
  // const observarUnion = observarInverso.join('');
  // console.log(observarUnion);

  const inverso = palindromo.split('').reverse().join('');

  if(inverso === palindromo) {
    return `La palabra ${palabra.toLowerCase()}, si es un Palindromo`;
  } else {
    return `La palabra ${palabra.toLowerCase()}, no es un Palindromo`;
  }


}

console.log(esUnPalindromo(palabra));