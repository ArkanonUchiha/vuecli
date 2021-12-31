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

import * as LoL from './game.js';

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

console.log("Objeto Arguments en una Arrow Function dentro de una Regular Function");
curso.myRegularFunction('a', 'b');

console.log("El Parametro Rest ...args de una Arrow Function");
curso.myRegularFunction2('A', 'B');

// -----------------------------------------------------

// EL RETURN IMPLICITO DE LAS ARROW FUNCTION CON UNA SOLA EXPRESION (SIN LLAVES)
console.log("HALO NEVER DIE " + curso.incremento(41));

// -----------------------------------------------------

// USANDO UNA REGULAR FUNCTION PARA DEFINIR UN METODO, DENTRO DE UNA CLASE
const batman = new curso.Hero("Black Batman");
console.log(batman);
// batman.logName();

// setTimeout(batman.logName, 1000);

// setTimeout(batman.logName.bind(batman), 1000);

// USANDO UNA ARROW FUNCTION PARA DEFINIR UN METODO, DENTRO DE UNA CLASE
const spiderman = new curso.Hero2("Spider-man");
console.log(spiderman);
// spiderman.logName2();

// setTimeout(spiderman.logName2, 1000);

// -----------------------------------------------------

// LA PALABRA RESERVADA 'NEW'
var edwin = curso.jugador();
var brandon = new curso.jugador();

console.log("Palabra Reservada New");
console.log(edwin);
console.log(brandon);



var individuo2 = new curso.jugador2();

console.log(individuo2);
console.log(individuo2.imprimirJugador2());



var individuo3 = new curso.jugador3("Lucia Guadalupe", "Hernandez Madregal", 28);
console.log(individuo3.imprimirJugador3());

// -----------------------------------------------------

// PROTOTIPOS (PROTOTYPE) EN ES5

const cuadrado = new curso.Square(10);
console.log(cuadrado);
console.log(cuadrado.getArea());

const cuadrado2 = new curso.Square2(5);
console.log(cuadrado2);
console.log(cuadrado2.getArea());

// -----------------------------------------------------

var Soraka = new LoL.Jugador("Soraka");
var Jinx = new LoL.Jugador("Jinx");
var Zyra = new LoL.Jugador("Zyra");

console.log(Soraka);
console.log(Jinx);
console.log(Zyra);

Soraka.curar(Jinx);
Soraka.curar(Jinx);
Soraka.curar(Jinx);
Zyra.enredadera(Jinx);

Jinx.atacar(Soraka);
Jinx.atacar(Soraka);
Jinx.atacar(Soraka);
Zyra.enredadera(Jinx);
Zyra.enredadera(Jinx);
Zyra.enredadera(Jinx);
Zyra.enredadera(Jinx);
Zyra.enredadera(Jinx);

// -----------------------------------------------------

// FUNCIONES typeof e instanceof

curso.identificaTypeOf({});
curso.identificaTypeOf(function() {});
curso.identificaTypeOf(2);
curso.identificaTypeOf(function() {
  console.log('Soy una funcion anonima');
});

var EB = new curso.primeraFunc();
curso.identificaTypeOf(EB);


curso.identificaInstanceOf(2);
curso.identificaInstanceOf('EB');
curso.identificaInstanceOf(EB);
curso.identificaInstanceOf({});
curso.identificaInstanceOf(function() {});

// -----------------------------------------------------

// TEMA 3: PROFUNDIZANDO OBJETOS
// ARREGLOS
