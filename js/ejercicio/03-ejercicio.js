//* Grados Fahrenheit = (grados centígrados × 9/5) + 32

alert("Bienvenido(a) al calculo de temperaturas: ")
alert("Vamos a calcular de grados celsius a fahrenheit")

let celsius = parseFloat(prompt("Ingrese los grados celsius"));

// 10.2 -> es float  tiene punto decimal o punto flotante
// 34.6 -> es float tiene punto decimal o punto flotante

let gradosFahrenheit = (celsius * 9/5) + 32;

// concatenación
console.log(celsius + "ºC es igual a " + gradosFahrenheit + "ºF");