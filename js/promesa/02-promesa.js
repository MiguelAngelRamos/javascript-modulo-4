
function apiSimulator() {
  return new Promise(function(resolve, reject) {
    let resultadoJson = false;
    if(resultadoJson) {
      const producto = {
        nombre: 'Iphone',
        color: 'space gray'
      };
      resolve(producto);
    } else {
      reject({error: "error en el servidor status code: 500"});
    }
  });
}

apiSimulator().then(function(producto) {
  console.log(producto);
}).catch(function(error) {
  console.log(error);
});