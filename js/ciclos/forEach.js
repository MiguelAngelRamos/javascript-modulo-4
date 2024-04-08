const productos = ['Televisor', 'Mouse', 'Notebook', 'Reloj', 'Refrigerador'];

//* sin el indice
productos.forEach((producto) => {
  console.log(producto);
})


productos.forEach((_, indice) => {
  console.log(indice);
})