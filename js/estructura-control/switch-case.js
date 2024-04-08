let producto = 'teclado';

switch(producto) {
  case 'celular':
    console.log('Es un celular...');
    break;
  case 'mouse':
    console.log('Es un mouse');
    break;
  case 'teclado':
    console.log('Es un teclado....');
    break;
  default:
    console.log(`Lo sentimos no tenemos el producto: ${producto}`);
}
