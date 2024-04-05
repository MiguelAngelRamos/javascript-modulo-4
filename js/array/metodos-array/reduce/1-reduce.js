//* El método reduce es acumulador, es decir toma una cantidad de datos y nos retorna el resultado acumulado.

const carrito = [
  { nombreProducto: 'Iphone 15 pro max', precio: 1700000 },
  { nombreProducto: 'Notebook Gamer Asus', precio: 1800000 },
  { nombreProducto: 'Teclado Gamer Razer', precio: 80000 },
  { nombreProducto: 'Monitor Gamer MSI', precio: 480000 },
];


const totalDeVenta = carrito.reduce((total, producto) => {
  return total + producto.precio
}, 0);

console.log(Intl.NumberFormat().format(totalDeVenta));