//* El método "reduce es un metodo de array" que se comporta como un acumulador, es decir toma una cantidad de datos y nos retorna el resultado acumulado.

const carrito = [
  { nombreProducto: 'Iphone 15 pro max', precio: 1700000 },
  { nombreProducto: 'Notebook Gamer Asus', precio: 1800000 },
  { nombreProducto: 'Teclado Gamer Razer', precio: 80000 },
  { nombreProducto: 'Monitor Gamer MSI', precio: 480000 },
];

//* el resultado acumulado lo vamos a guardar en "totalDeVenta"
const totalDeVenta = carrito.reduce((totalAcumulado, producto) => {
  return totalAcumulado + producto.precio
}, 0);

console.log(Intl.NumberFormat().format(totalDeVenta));

//* Array = []
//* metodoArray -> map
//* metodoArray -> reduce
//* () => {} "callback"
Array.metodoArray((elemento) => {

})
