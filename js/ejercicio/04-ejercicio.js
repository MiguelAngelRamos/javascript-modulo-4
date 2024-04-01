// Vamos a preguntar la fecha de nacimiento y base a ella calculamos la edad

let fechaNacimiento = prompt("Ingrese la fecha de nacimiento (formato AAAA-MM-DD)");

let fechaNacimientoDate = new Date(fechaNacimiento);

// Obtener la fecha actual
let fechaActual = new Date();

// Calculamos la edad
// fechaActual.getFullYear() solo obtengo el año
let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear()

if(edad >= 18) {
  alert("Puedes ver la peli")
} else {
  alert("Lamentablemente eres menor de edad, aun no puedes ver la peli")
}