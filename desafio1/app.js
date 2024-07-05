//mensaje de Bienvenida
alert("¡Bienvenida y bienvenido a nuestro sitio web!");

//define las variables del desafio
let nombre = 'Luna';
let edad = '25';
let numerdoDeVentas = '50';
let saldoDisponible = '1000'; 

//define variable con mensaje de error y muestra el mensaje
let mensajeDeError = ("¡Error! Completa todos los campos")
alert(mensajeDeError);

//solicita el nombre al usuario y guardalo en el log del navegador
let nombreDeUsuario = prompt("¿cuál es tu nombre?");
console.log(nombreDeUsuario);

//Solicita la edad al usuario y guardalo en el log del navegador
let edadUsuario = prompt("¿cuál es tu edad?");
console.log(edadUsuario);

//Si la edad es igual o mayor a 18 muestra el mensaje del desafío
if(edadDelUsuario => 18) {
    alert("¡Puedes obtener tu licencia de conducir!");
}