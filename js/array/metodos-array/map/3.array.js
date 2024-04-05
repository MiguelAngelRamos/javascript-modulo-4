const carrito = [
  { nombreProducto: 'Iphone 15 pro max', precio: 1700000 },
  { nombreProducto: 'Notebook Gamer Asus', precio: 1800000 },
  { nombreProducto: 'Teclado Gamer Razer', precio: 80000 },
  { nombreProducto: 'Monitor Gamer MSI', precio: 480000 },
];

//* Cual es utilidad de aplicar el map en esta situación

const resultadoMap = carrito.map(producto => {
  //* Intl.NumberFormat().format(producto.precio)
  return `EL producto : ${producto.nombreProducto}, tiene un precio de $ ${Intl.NumberFormat().format(producto.precio)}`; 
});

console.log(resultadoMap);