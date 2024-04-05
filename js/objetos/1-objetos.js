//* Objetos en javascript, son estructura de datos que dando por clave y valor
//* Objeto con valores dinamicos
const persona = {
  nombre: 'Sofia',
  edad: 27,
  lenguajesFavoritos: ['java', 'javascript', 'python', '.net'],
  profesion: 'Ing de Software',
  isActive: true,
  redesSociales: { 
    youtube: {
      enlace: 'youtube.com/sofia',
      nombreUsuario: 'sofia'
    },
    instagram: {
      enlace: 'instagram.com/@sofia',
      nombreUsuario: '@sofia'
    }
  }
}
console.log(persona.nombre); // Sofia
console.log(persona.edad); // 27
console.log(persona.lenguajesFavoritos); // array
console.log(persona.profesion); // ing de software
console.log(persona.isActive); // true
console.log(persona.redesSociales.instagram);
console.log(persona.redesSociales.instagram.enlace);
console.log(persona.redesSociales.instagram.nombreUsuario);
console.log(persona.redesSociales.instagram.nombreUsuario);

// Destructuring 
const {enlace: enlaceInstagram, nombreUsuario:userInstagram} = persona.redesSociales.instagram;
console.log(`Este es el nombre de usuario de Sofia: ${userInstagram}`);
//* Como obtener mediante Destructuring el nombre de usuario de sofia de youtube
//??? Como el destructuring para acceder al nombre de usuario de youtube de sofia de manera que lo pueda imprirmir directamente con este console.log
const {enlace: enlanceYt, nombreUsuario: userYt} = persona.redesSociales.youtube;
console.log(`Este es el nombre de usuario de sofia de youtube: ${userYt}`);
//* ¿Se podria desestructurar un solo valor?, Si se puede como se hace entonces?
const { redesSociales: { instagram: {nombreUsuario}}} = persona;
console.log(`Este es el nombre de Sofia de instagram, se accedio directamente a el: ${nombreUsuario}`);
//* Realice el ejercicio de traer en enlace de youtube de sofia directamente como en el ejemplo anterior
const {redesSociales: {youtube: {enlace}}} = persona;
console.log(`Este es enlace de youtube de sofia ${enlace}`);
