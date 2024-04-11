//* Una promesa sirve para trabajar con peticiones asincronas y es usado para disminuir el uso excesivo de callback.


let myPromise = new Promise(function(resolve, reject) {
  let numero1 = 5;
  let numero2 = 4;
  let resultadoSumar = numero1+numero2;

  //* la condición para que esta promesa se cumpla de manera correcta es que le resultado sea igual a 10, cualquier otro valor va generar que la promesa no se cumpla de manera correcta. pero esto no significa que no genere un resultado, por que recuerda que podemos devolver un resultado negativo que significa que la promesa no fue existosa
  if(resultadoSumar === 10) {
    resolve('Es Correcto el resultado es igual a 10');
  } else {
    reject('No es correcto el resultado esperado no fue igual a 10');
  }
});

//* Ejecutando la promesa - llamar a la promesa
myPromise.then(function(resultado) {
  // * bd y va guardar la info
  console.log(resultado);
}).catch(function(error) {
  //* es generar una visual con el mensaje de error
  console.log(error);
});

//* El then esta ligado al resolve
//* EL catch esta ligado al reject