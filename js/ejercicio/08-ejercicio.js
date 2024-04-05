// const obtenerDiaPorNumero = (numero) => {
//   //* Espero que 1 sea el lunes
//   const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
//               //  0    ,   1     ,    2       ,   3     ,    4     ,   5     ,  6
//   return dias[numero - 1];
// }

function obtenerDiaPorNumero(numero) {
    //* Espero que 1 sea el lunes
    const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    //* los indices de un arreglo comienzan desde 0
    //              0    ,   1     ,    2       ,   3     ,    4     ,   5     ,  6
    // dias[0] obtienes el dia lunes  'Lunes'
    return dias[numero - 1];
}
//* Invocamos la función
const resultado = obtenerDiaPorNumero(1); // * espero recibir el lunes
console.log(resultado);//* imprime por consola el dia Lunes

