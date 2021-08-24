import Vue from 'vue'
import App from './App.vue';

import a from './test.js';
import { b } from './test.js';
import { f1 } from './test.js';
import { saludar } from './test.js';
import { despedir } from './test.js';
import { Clase } from './test.js';
import { Bienvenido } from './test.js';

import './test2.js';

import * as name from './test3.js';

import * as animales from './test4.js';

import * as curso from './cursoJS.js';

Vue.config.productionTip = false;


// INSTANCIA VUE
new Vue({
  render: h => h(App),
}).$mount('#app');


// ANCHO DE PANTALLA CON SCROLL
const getScrollBarWidth = () => window.innerWidth - document.documentElement.getBoundingClientRect().width;
const cssScrollBarWidth = () => document.documentElement.style.setProperty('--scrollbar', `${getScrollBarWidth()}px`);

addEventListener('load', cssScrollBarWidth);
addEventListener('resize', cssScrollBarWidth);


// PRUEBAS
console.log("Este es mi valor: " + a);
console.log("Este es mi valor: " + b);
console.log("Este es mi valor: " + f1);
console.log("Este es mi valor: " + saludar);
console.log("Este es mi valor: " + despedir);
console.log("Este es mi valor: " + Clase);
console.log("Este es mi valor: " + Bienvenido);

console.log("Este es mi valor: " + name.xbox);
console.log("Este es mi valor: " + name.play);
console.log("Este es mi valor: " + name.materia);
console.log("Este es mi valor: " + name.edad);

animales.mamifero();
animales.oviparo();

// -----------------------------------------------------

curso.imprimir("Edwin", "Brandon");

// -----------------------------------------------------

curso.imprimirDos({
  nombre: "Lucia",
  apellido: "Hernandez",
  edad: 28
});

// -----------------------------------------------------

curso.imprimirTres(function() {
  console.log("Soy una funcion anonima.");
});

// -----------------------------------------------------

var total = curso.obtenerResultado() + 80;

console.log("La suma es: " + total);

// -----------------------------------------------------

console.log("Valor Retornado: " + curso.getName() + " " + "Lopez Martinez");

// -----------------------------------------------------

console.log(curso.compara);
console.log(curso.compara());

// if(compara() === true){
  if(curso.compara()){
    console.log("ES MAYOR");
  }
  else {
    console.log("ES MENOR");
  }

// -----------------------------------------------------

// MANERA 1
// var persona = curso.crearPersona("Diana", "Lopez");

// console.log(persona.nombre, persona.apellido);


// MANERA 2
// var persona = curso.crearPersona();

// console.log(persona.nombre="SARA", persona.apellido="HIDEKEL");


// MANERA 3
var persona = curso.crearPersona();

persona.nombre="SARA";
persona.apellido="HIDEKEL";
console.log(persona.nombre, persona.apellido);

// -----------------------------------------------------

var nuevaFuncion = curso.creaFuncion();
var segundaFuncion = nuevaFuncion(persona.nombre, persona.apellido);

segundaFuncion();

// -----------------------------------------------------

curso.primeraClase();

curso.primeraClase.nombre = "Giselle";
curso.primeraClase.direccion = {
  pais: "Mexico",
  ciudad: "CDMX",
  alcaldia: {
    nombre: "Tlahuac",
    colonia: "Selene"
  }
}

console.log(curso.primeraClase.nombre);
console.log(curso.primeraClase.direccion);
console.log(curso.primeraClase.direccion.alcaldia);
console.log("Nombre de la Funcion: " + curso.primeraClase.name);

// -----------------------------------------------------

// RECURSIVIDAD
for(var lool = 10; lool > 0; lool--){
  console.log("VALOR DE i: " + lool);
}

curso.cuentaAtras(20);

// -----------------------------------------------------

curso.persona.imprimirNombre();


// VARIANTE DEL PRIMER EJEMPLO DE EL VALOR DE THIS EN UNA ARROW FUNCTION
// var rios = curso.persona;
// curso.persona.imprimirNombre(rios);


curso.persona.direccion.obtenerPais();


curso.myObject.myMethod([1,2,3]);


var usuario = curso.usuario;
curso.usuario.sayName(usuario);

// -----------------------------------------------------

// CONTRUCTORES EN REGULAR FUNCTION
function Car(color) {
  console.log(this);
  this.color = color;
  console.log(this);
}

const redCar = new Car('red');
redCar instanceof Car;

console.log(redCar);


// CONTRUCTORES EN ARROW FUNCTION (ARROJA ERROR)
// const Carro = (color) => {
//   this.color = color;
// };

// new Carro('red');

// -----------------------------------------------------

curso.myFunction();
curso.myFunction('a', 'b');
