const carrito = [
  { nombreProducto: 'Iphone 15 pro max', precio: 1700000 },
  { nombreProducto: 'Notebook Gamer Asus', precio: 1800000 },
  { nombreProducto: 'Teclado Gamer Razer', precio: 80000 },
  { nombreProducto: 'Monitor Gamer MSI', precio: 480000 },
];

//* filter un nuevo metodo de array
const resultadoFilter = carrito.filter((producto) => {
  return producto.precio > 1000000
});

//* Eliminar un producto del carrito
//* != significa "distinto de"
const resultadoFilterNombreProducto = carrito.filter((producto) => {
  return producto.nombreProducto != 'Monitor Gamer MSI';
})

console.log(resultadoFilterNombreProducto);
// console.log(resultadoFilter);