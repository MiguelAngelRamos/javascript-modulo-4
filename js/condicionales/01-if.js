// Condicionales "if" "si"
// Solicitar al usuario que ingrese una edad
//* Me Aseguro que siempre un numero pasandolo por el Number
//* parseInt(18--) l
let edad = prompt("Ingrese la edad de la persona: ");
// console.log(isNaN(edad));
if(isNaN(edad)) {
  console.log('Ingrese un número válido');
} else {
  console.log('numero valido');
  edad = Number(edad);
  //* la edad a testear es:  90
  if(edad > 0) {
    if(edad < 18) {
      // Edad menor a 18 años
      console.log('La persona es menor de edad');
    } else if(edad < 65) {
      // Edad esta entre 18 y 64
      console.log("Persona es un adulto");
    } else if(edad < 85) {
      // Edad 65 y 84
      console.log('Persona es un adulto mayor');
    } else {
      // 85 años o mas
      console.log('Persona es de años dorados.');
    }
  } else {
    console.log('La edad debe ser mayor que cero');
  }
}
