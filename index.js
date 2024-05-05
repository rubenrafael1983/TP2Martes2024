const { createMultipleDoneError } = require("mocha/lib/errors");

console.log("Hola Equipo");
console.log("Hola Equipo");
console.log("Hola Equipo");
console.log("Hola Equipo");

let nombre = "Ruben";
console.log("🚀 ~ nombre:", nombre);
//clg para escribir un colsole log

//hay 3 tipos de variables
var nombre2 = "canela"; //no se utiliza // puede no tener un valor, no se declara el tipo, es no tipado
console.log("🚀 ~ nombre2:", nombre2);
let variable2 = "canela"; //este es el que tengo que usar
console.log("🚀 ~ variable2:", variable2);
const edad = 32;
console.log("🚀 ~ edad:", edad);

// Clase 2
let bool = true;
console.log("🚀 ~ bool:", bool);
console.log("🚀 ~ bool:", typeof bool);

let bigN = 9999999999n;
console.log("🚀 ~ bigN:", bigN);
console.log("🚀 ~ bigN:", typeof bigN);

let und = undefined;
console.log("🚀 ~ und:", und);
console.log("🚀 ~ und:", typeof und);

let nl = null;
console.log("🚀 ~ nl:", nl);
console.log("🚀 ~ nl:", typeof nl);

//Objetos en JavaScript
const obj = {
  nombre: "camilo",
  apellido: "ojeda",

  //este si es un metodo, porque esta dentro de un objeto, no es una función
  ladrar: function () {
    console.log("Estoy ladrando");
    console.log("🚀 ~ obj.ladrar:", typeof obj.ladrar);
  },
};

console.log("🚀 ~ obj:", obj);
console.log("🚀 ~ obj:", typeof obj);

//estos dos son iguales
console.log("🚀 ~ obj:", obj.nombre);
console.log("🚀 ~ obj:", obj["nombre"]);

//Array
const ar = [1, "osvaldo", {}];

console.log("🚀 ~ ar:", ar);
console.log("🚀 ~ ar:", ar[1]);
console.log("🚀 ~ ar:", typeof ar);

const date = Date();
console.log("🚀 ~ date:", date);
console.log("🚀 ~ date:", typeof date);

/////////Los datos primitivos se escriben con const y los datos primitivos con let//////
/////////Los datos priitivos pueden cambiar///////////

//Funciones (Son funciones porque estan fuera de objetos y fuera de la clase, si estuvieran adentro
//           serian metodos. La función esta suelta en el código)

function saludar() {
  console.log("Hola");
}
saludar();
console.log("🚀 ~ saludar ~ saludar:", saludar);
console.log("🚀 ~ saludar ~ saludar:", typeof saludar);
console.log("🚀 ~ saludar ~ saludar:", typeof saludar());
console.log("🚀 ~ saludar ~ saludar:", saludar());

//Todas las funciones retornar Undefined

// las variables con var tienen hoisting, puedo llamarlas antes de declarlas y no va a dar error
// esto es para reservar el espacio en memoria, con let no pasa mas, rompe por todos lados :)
//Las funciones tambien tienen hoisting, o sea puedo llamarla antes de que sea creada.

saludar2();

function saludar2(param) {
  console.log(`Hola ${param} como estas? `);
  console.log("Hola " + param + " como estas?");
}

console.log("🚀 ~ saludar2 ~ saludar2:", saludar2);
console.log("🚀 ~ saludar2 ~ saludar2:", typeof saludar2);

saludar2(10);


//Arrow function

const suma=(x,y)=>x+y

const suma2=(x,y)=>{
return x+y;
}
//Si no esta todo en la misma linea, tengo que poner la palabra return
console.log("🚀 ~ suma:", suma)
console.log(suma(5,6))
console.log(suma2(6,6))


//VEMOS EN THIS

function thisFunction(){
    console.log("🚀 ~ thisFunction ~ thisFunction:", this)
}
thisFunction()
const thisArrow=()=>{
    console.log("🚀 ~ thisArrow ~ thisArrow:", this)
}
thisArrow()