/**
 * Se pide crear un control de acceso al cine para ver una pelicula que requiere se tenga 18 años o mas, para poder verla.
 */

alert("Bienvenido(a) al Cine.");
let edad = prompt("Cual es tu edad ?");
          
// if significa "si"
if(edad >= 18) {
  alert("Pase a la sala 4 y disfrute su pelicula")
} else {
  alert("No tiene la edad suficiente para ver esta pelicula")
}

// Para comentar en vscode
// control + k + c (sin dejar de presionar el control)
// control + k + u ( sin dejar de presionar la tecla control)
