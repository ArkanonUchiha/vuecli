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

console.warn('SECCION 3 - clase 22, 23: PROFUNDIZANDO OBJETOS');

// ARREGLOS
let arr1 = [1,2,3,4,5];
let arr2 = ['a','b','c','d','e'];

console.log("Arreglo de Numeros y letras");
console.log(arr1);
console.log(arr2);

console.log("Primer indice");
console.log(arr1[0]);
console.log(arr2[0]);

console.log("Ultimo indice");
console.log(arr1[4]);
console.log(arr2[4]);

console.log("Indice inexistente");
console.log(arr1[5]);

console.log("Funciones nativas para areglos:");
console.log("Invertir el orden del arreglo - REVERSE");
console.log(arr1.reverse());
console.log(arr2.reverse());

// PARA ESTE EJEMPLO SE ESTA ELEVANDO AL CUADRADO CADA ELEMENTO DEL PRIMER ARREGLO
console.log("Ejecutar una funcion en cada elemento del arreglo - MAP");
let cuadradoArregloMap = arr1.map(function(elem) {
  elem *= elem;
  return elem;
});

console.log('Elevar al cuadrado cada elemento');
console.log(cuadradoArregloMap);

// PARA ESTE EJEMPLO SE ESTA SACANDO LA RAIZ CUADRADA DE CADA ELEMENTO DEL NUEVO ARREGLO
// SE ESTAN USANDO LAS FUNCIONES NATIVAS PARA MATEMATICAS
let raizArreglo = cuadradoArregloMap.map(Math.sqrt);
console.log('Raiz cuadrada de cada elemento');
console.log(raizArreglo);

console.log('Convertir en string el arreglo o sus elementos - JOIN');
let arregloJoin1 = arr1.join();
let arregloJoin2 = arr2.join();

console.log(arregloJoin1);
console.log(arregloJoin2);


let arregloJoinArgumento1 = arr1.join("");
let arregloJoinArgumento2 = arr2.join("");
console.log(arregloJoinArgumento1);
console.log(arregloJoinArgumento2);


let arregloJoinArgumento3 = arr1.join("...");
let arregloJoinArgumento4 = arr2.join("...");
console.log(arregloJoinArgumento3);
console.log(arregloJoinArgumento4);


let arregloJoinArgumento5 = arr1.join("-");
let arregloJoinArgumento6 = arr2.join("-");
console.log(arregloJoinArgumento5);
console.log(arregloJoinArgumento6);


let arregloJoinArgumento7 = arr1.join(" ");
let arregloJoinArgumento8 = arr2.join(" ");
console.log(arregloJoinArgumento7);
console.log(arregloJoinArgumento8);

console.log('CONVERTIR STRING A ELEMENTOS STRING DENTRO DE UN ARREGLO - SPLIT');

let nombre = 'EDWIN BRANDON LOPEZ MARTINEZ';
let arregloSplit1 = nombre.split();
console.log(arregloSplit1);

let arregloSplit2 = nombre.split(" ");
console.log(arregloSplit2);

let arregloSplit3 = nombre.split("I");
console.log(arregloSplit3);

let arregloSplit4 = nombre.split("IN");
console.log(arregloSplit4);

let arregloSplit5 = arregloJoinArgumento3.split("...");
console.log(arregloSplit5);

let arregloSplit6 = arregloJoinArgumento5.split("-");
console.log(arregloSplit6);

console.log('AGREGAR NUEVOS ELEMENTOS AL FINAL DE UN ARREGLO - PUSH');
arr1.push(6);
arr2.push('f');

console.log(arr1);
console.log(arr2);

console.log('AGREGAR NUEVOS ELEMENTOS AL INICIO DE UN ARREGLO - UNSHIFT');
arr1.unshift(7);
arr2.unshift('Z');

console.log(arr1);
console.log(arr2);


console.log('CONVERTIR LOS ELEMENTOS DE UN ARREGLO EN UNA CADENA DE TEXTO -TOSTRING');
let arregloString = arr1.toString();
console.log(arregloString);

let arregloString2 = arregloString.split(",");
console.log(arregloString2);

console.log('ELIMINAR EL ULTIMO ELEMENO DE UN ARREGLO - POP');
let arregloPop = arr1.pop();
console.log(arregloPop);
console.log(arr1);

console.log('ELIMINAR O AÑADIR ELEMENTOS O RANGO DE ELEMENTOS - SPLICE');
let arregloSplice1 = arr1.splice(1, 3);
console.log(arregloSplice1);
console.log(arr1);

arr1.splice(1, 0, 100, 200, 300, 400);
console.log(arr1);

console.log('- SLICE');
let arregloSlice1 = arr1.slice(0,4);
console.log(arregloSlice1);

let arregloSlice2 = arr1.slice(1,4);
console.log(arregloSlice2);

let arregloSlice3 = arr1.slice(3,5);
console.log(arregloSlice3);
console.log(arr1);

console.log("OBTENER EL NUMERO DE ELEMENTOS QUE HAY EN EL ARREGLO");
console.log(arr1.length);

// -----------------------------------------------------

console.warn('EJEMPLO FUERA LAS CLASES, EN DONDE CONVIERTO UN OBJETO JS A STRING MEDIANTE EL USO DE JSON.STRINGIFY');

let objetoEjemplo = {
  nombre: 'brandon',
  edad: 28,
  apellido: null,
  pais: undefined,
  estudios: { }
};

let objetoJSON = JSON.stringify(objetoEjemplo); 
console.log(objetoJSON);


console.warn('EJEMPLO FUERA LAS CLASES, EN DONDE CONVIERTO UN STRING JSON A UN OBJETO JS MEDIANTE EL USO DE JSON.PARSE');

let objetoJS = JSON.parse(objetoJSON);
console.log(objetoJS);


console.warn('EJEMPLO FUERA LAS CLASES, EN DONDE CONVIERTO UN ARRAY STRING JSON Y UN OBJECT ARRAY JSON A UN ARRAY Y A UN OBJETO JS MEDIANTE EL USO DE JSON.PARSE');

const arrayStringJSON = '["Java", "Python", "JavaScript"]';
const objectStringJSON = '[{"name": "Java", "description": "Java is a class-based."},{"name": "Python", "description": "Python is an interpreted."}, {"name": "JS", "description": "JS is a programming language."}]';

const simpleArrayJS = JSON.parse(arrayStringJSON);
const simpleObjectJS = JSON.parse(objectStringJSON);

console.log(simpleArrayJS);
console.log(simpleObjectJS);

/*
  EXTRAYENDO ELEMENTOS DE OBJETOS ANONIMOS DENTRO DE ARRAYS
*/
console.log('NAME -> ' + simpleObjectJS[0].name, simpleObjectJS[2].name);

/*
  EJEMPLO FUERA LAS CLASES, EN DONDE CONVIERTO UN ARRAY STRING JSON Y UN OBJECT ARRAY JSON
  A UN ARRAY Y A UN OBJETO JS MEDIANTE EL USO DE JSON.PARSE
*/

const ArrayStringJSON = JSON.stringify(simpleArrayJS);
const ObjectStringJSON = JSON.stringify(simpleObjectJS);

console.log(ArrayStringJSON);
console.log(ObjectStringJSON);

/*
  EJEMPLO FUERA DE LAS CLASES, EN DONDE CONSTRUYO UN ARRAY DE FUNCIONES Y UN OBJETO,
  LAS FUNCIONES SON INVOCADAS POR FUERA UTILIZANDO LA SINTAXIS DE SU INDICE SEGUIDO DE LOS PARANTESIS DE EJECUCION,
  Y LAS PROPIEDADES DEL OBJETO SON EXTRAIDAS CON LA SINTAXIS DE PUNTO
*/

const saludoNombre = "Me llamo Brandon y tengo ";

const functionsInArray = [
  function() {
    console.log("PRIMERA FUNCION IN ARRAY");
  },
  function() {
    console.log("SEGUNDA FUNCION IN ARRAY");
  },
  function(saludoNombre) {
    return saludoNombre + "28 años.";
  },
  {
    nacionalidad: 'mexicana',
    juegoFavorito: 'Halo'
  }
];

console.log(functionsInArray[0]);
console.log(functionsInArray[1]());
console.log(functionsInArray[2](saludoNombre));
console.log(functionsInArray[3]);
console.log(functionsInArray[3].nacionalidad);
console.log(functionsInArray[3].juegoFavorito);

/*
  EJEMPLO FUERA DE LAS CLASES, EN DONDE CONSTRUYO UN ARRAY DE ARRAYS ANIDADOS Y LOS CONSULTO
  POR MEDIO DE SU INDICE PARA CONOCER SU VALOR.
*/

let arrayDeArrays = [
  ['nombres', 'apellidos', 'RFC'],
  [16,17,18],
  [
    [
      'naranja',
      'sandia'
    ],
    [
      'cebolla',
      'papa'
    ],
    [
      ['GATOS','PERROS','PERICOS']
    ]
  ]
];

console.log(arrayDeArrays);
console.log(arrayDeArrays[0], arrayDeArrays[2]);
console.log(arrayDeArrays[1][1]);
console.log(arrayDeArrays[2][2][0][2]);

// -----------------------------------------------------

console.warn('SECCION 3 - clase 24: ARGUMENTOS (ARGUMENTS)');

function argumentsValidation (a,b,c,d,e,f,g) {

  console.log('ESTO ES argumentsValidation:');

  console.log(arguments);

  // OBTIENE EL NUMERO DE PARAMETROS QUE SE HAN ENVIADO A LA FUNCION, NO LOS QUE SE HAN RECIBIDO
  console.info(arguments.length);
  
  // CON ESTE IF SE VALIDA EL NUMERO DE PARAMETROS, PARA QUE LA FUNCION REALICE SU TAREA
  // NO REALIZARA SU TAREA SI HA RECIBIDO MENOS DE 6 O MAS DE 6, TIENEN QUE SER 7
  if(arguments.length !== 7) {
    console.error("La funcion necesita 7 parametros");

    // ESTE RETURN DETIENE LA SECUENCIA DE LA FUNCION Y EVITA QUE SE SIGA EJECUTANDO
    return;
  }

  // ESTE CONSOLE NO SE MUESTRA HASTA QUE SE ENVIE EL NUMERO DE PARAMETROS REQUERIDOS
  console.log(a,b,c,d,e,f,g);
}

argumentsValidation(100, 200, 300, 400, {}, function(){});


function showArguments (a,b,c,d,e,f,g,h) {

  console.log('ESTO ES showArguments:');

  console.log(typeof arguments);

  console.log(arguments);

  console.info(arguments.length);

  console.log(a,b,c,d,e,f,g,h);

  console.log(arguments[6]);
}

showArguments(100, 200, 300, 400, {}, function(){}, 'SOY EL SEPTIMO ARGUMENTO');

// -----------------------------------------------------

console.warn('SECCION 3 - clase 25: SOBRE CARGA DE OPERADORES EN JS');

function crearProducto(nombre, precio) {
  nombre = nombre || 'SIN NOMBRE';
  precio = precio || 0;

  console.log('PRODUCTO: ', nombre, '-', 'PRECIO: ', precio)
}

function crearProducto100(nombre) {
  crearProducto(nombre, 15000);
}

function crearProductoCamisas(precio) {
  crearProducto("Camisa Azul", precio);
}

crearProducto();
crearProducto('Laptop MSI Gaming', 24000);
crearProducto100('Monitor Gaming');
crearProductoCamisas(300);


var miVariable = undefined || 45;
console.log(miVariable);

function f(param){
  var variable = param || "sin valor";
  console.log(variable);
}

f();
f(100);

// -----------------------------------------------------

console.warn('SECCION 3 - clase 26: POLIMORFISMO EN JS');

function determinaDato(a) {
  if(a === undefined) {
    console.log("La variable a es UNDEFINED... no se que hacer.");
  }

  if (typeof a === "number") {
    console.log("A es un numero, y puedo hacer operacion con numeros.");
  }

  if(typeof a === "string") {
    console.log("A es un string, y puedo mostrar texto.");
  }

  if(typeof a === "object") {
    console.log("A es un objeto, pero puede ser cualquier cosa.");

    if(a instanceof Number) {
      console.log('A es un objeto numerico (OBJETO DEL TIPO NUMBER).');
    }
  }
}

determinaDato(1);
determinaDato("Diana");
determinaDato({
  nombre: 'Brandon'
});

/*
  NOTA: CUANDO USAMOS LA PALABRA new ESTAMOS USANDO/CREANDO UNA INSTANCIA DE UN OBJETO.
  NO ES UN VALOR PRIMITIVO, ES UN OBJETO. EN ESTE CASO 3 NO ES UN VALOR PRIMITIVO, ES UN OBJETO DEL TIPO Number.
  APESAR DE QUE PUEDEN REALIZARSE OPERACIONES COMO SI FUESE UN VALOR PRIMITIVO.
  */

var nuevoNumero = new Number(3);

console.log(nuevoNumero);
console.log(typeof nuevoNumero);

determinaDato(nuevoNumero);

// -----------------------------------------------------

console.warn('SECCION 3 - clase 27: CUIDADO CON LAS FUNCIONES Y SU CONTEXTO');

/*
  NOTA: UN ARREGLO DE FUNCIONES
*/

function verFunciones() {
  var arr = [];
  // var numero = 1;

  // NOTA: LO QUE ESTA DENTRO DEL for ES UNA FUNCION QUE CREA funciones
  
  for(var numero = 1; numero <= 10; numero++ ) {
    arr.push(
      (function(numero) {
        return function() {
          console.log(numero);
        }
      })(numero)
    );

    console.log(arr);
  }

  // console.log(arr);

  // numero = 2;

  // arr.push(
  //   function() {
  //     console.log(numero);
  //   }
  // );

  // numero = 3;

  // arr.push(
  //   function() {
  //     console.log(numero);
  //   }
  // );

  return arr;
}

var funciones = verFunciones();

/*
  ESTA ES UNA FORMA DE INVOCAR UNA FUNCION QUE SE ENCUENTRA DENTRO DE UN ARRAY
*/

  funciones[0]();
  funciones[1]();
  funciones[2]();
  funciones[3]();
  funciones[4]();
  funciones[5]();
  funciones[6]();
  funciones[7]();
  funciones[8]();
  funciones[9]();

// -----------------------------------------------------

console.warn('SECCION 3 - clase 28: OBJETO NUMBER');

let NEWNUMBER = 10;
let NEWNUMBER2 = new Number(10);

console.log(`VALOR: ${NEWNUMBER} - TIPO: ${typeof NEWNUMBER}`);
console.log(`VALOR: ${NEWNUMBER2} - TIPO: ${typeof NEWNUMBER2}`);
console.log(NEWNUMBER === NEWNUMBER2, NEWNUMBER == NEWNUMBER2);

// -----------------------------------------------------

console.warn('SECCION 3 - clase 29: OBJETO BOOLEAN');

let NEWBOOLEAN = true;
let NEWBOOLEAN2 = new Boolean(true);

console.log(`VALOR: ${NEWBOOLEAN} - TIPO: ${typeof NEWBOOLEAN}`);
console.log(`VALOR: ${NEWBOOLEAN2} - TIPO: ${typeof NEWBOOLEAN2}`);

// UNA COSA CURIOSA, SI NO SE AGREGA UN VALOR AL OBJETO EL VALOR ES false
let NEWBOOLEAN3 = new Boolean();

console.log(`VALOR: ${NEWBOOLEAN3} - TIPO: ${typeof NEWBOOLEAN3}`);

// -----------------------------------------------------

console.warn('SECCION 3 - clase 30: OBJETO STRING');

const NEWSTRING = new String("Brandon");
const NEWSTRING2 = "Brandon";
const NEWSTRING3 = "Edwin Brandon Lopez Martinez";
const NUEVOARR = [1,2,3];


console.log(NEWSTRING);
console.log(NEWSTRING[1]);


console.log(NEWSTRING2);
console.log(NEWSTRING2[1]);


console.log(NUEVOARR);

// MAYUSCULAS Y MINUSCULAS
console.log(NEWSTRING2.toUpperCase());
console.log(NEWSTRING2.toLowerCase());


console.log(NEWSTRING2.indexOf("o"));
console.log(NEWSTRING2.indexOf("O"));
console.log(NEWSTRING2.toUpperCase().indexOf("O"));
console.log(NEWSTRING2.indexOf("z"));


console.log(NEWSTRING2.indexOf("n"));
console.log(NEWSTRING2.lastIndexOf("n"));


console.log(NEWSTRING2.indexOf("Br"));
console.log(NEWSTRING2.indexOf("an"));
console.log(NEWSTRING2.indexOf("don"));

// RECORTAR CADENAS DE TEXTO
console.log(NEWSTRING3.substring(6));
console.log(NEWSTRING3.substring(6, 10));
console.log(NEWSTRING3.substring(0, NEWSTRING3.indexOf(" ")));


console.log(NEWSTRING3.split());
console.log(NEWSTRING3.split(" "));

// -----------------------------------------------------

console.warn('SECCION 3 - clase 31: OBJETO FECHA (DATE)');

const FHOY = new Date(); // FECHA ACTUAL DEL NAVEGADOR O DEL SISTEMA
const FRANDOM = new Date(1); // UN PARAMETRO SON LOS MILISEGUNDOS REPRESENTADOS DE UNA FECHA
const FFIJA = new Date(1993, 6, 4, 5, 30, 40, 50); // FECHA FIJA (ANIO, MES, DIA, HORA, MIN, SEG, MILISEG)

console.log(FHOY);
console.log(FRANDOM);
console.log(FFIJA);


console.log("METODO PAR OBTENER AÑO - getFullYear()");
console.log(FHOY.getFullYear());
console.log(FRANDOM.getFullYear());
console.log(FFIJA.getFullYear());


console.log("METODO PAR OBTENER MES - getMonth()");
console.log(FHOY.getMonth());
console.log(FRANDOM.getMonth());
console.log(FFIJA.getMonth());
console.log(FFIJA.getMonth() + 1);


console.log("METODO PAR OBTENER DIA - getDate()");
console.log(FHOY.getDate());
console.log(FRANDOM.getDate());
console.log(FFIJA.getDate());


console.log("METODO PAR OBTENER HORA - getHours()");
console.log(FHOY.getHours());
console.log(FRANDOM.getHours());
console.log(FFIJA.getHours());


console.log("METODO PAR OBTENER MINUTOS - getMinutes()");
console.log(FHOY.getMinutes());
console.log(FRANDOM.getMinutes());
console.log(FFIJA.getMinutes());


console.log("METODO PAR OBTENER SEGUNDOS - getSeconds()");
console.log(FHOY.getSeconds());
console.log(FRANDOM.getSeconds());
console.log(FFIJA.getSeconds());


console.log("METODO PAR OBTENER MILISEGUNDOS - getMilliseconds()");
console.log(FHOY.getMilliseconds());
console.log(FRANDOM.getMilliseconds());
console.log(FFIJA.getMilliseconds());


console.log("METODO PARA OBTENER LA REPRESENTACION EN MILISEGUNDOS DE UNA FECHA - getTime()");
console.log(FHOY.getTime());
console.log(FRANDOM.getTime());
console.log(FFIJA.getTime());


console.log("REPRESENTAR FECHAS CON MILISEGUNDOS USANDO EL CONSTRUCTOR new Date() CON SOLO UN PARAMETRO");
const FHOY_MILISEG = new Date(1666560018089);
const FRANDOM_MILISEG = new Date(1);
const FFIJA_MILISEG = new Date(741785440050);

console.log(FHOY_MILISEG);
console.log(FRANDOM_MILISEG);
console.log(FFIJA_MILISEG);


console.log("EJEMPLO DE USO DE getTime() - MOSTRAR TIEMPO DE EJECUCION DE UN PROCESO");
const INICIO = new Date();

for(var i=0; i < 15000; i++) {
  console.log("Cargando...");
}

const FIN = new Date();

console.log(INICIO);
console.log(FIN);

const DURACION = FIN.getTime() - INICIO.getTime();

console.log(DURACION + " MILISEGUNDOS");
console.log((DURACION / 1000) + " SEGUNDOS");


console.log("MOMENT.JS - LIBRERIA PARA MANEJAR FECHAS");

// -----------------------------------------------------

console.warn('SECCION 3 - clase 32: OPERACIONES CON FECHAS');

console.log("FECHA ORIGINAL");
const NUEVA_FECHA = new Date(1993, 6, 4);
console.log(NUEVA_FECHA);

console.log("----------------------------------------");
console.log("AGREGAR/SUMAR AÑOS");
NUEVA_FECHA.setFullYear(2000);
console.log(NUEVA_FECHA);


console.log("----------------------------------------");
console.log("AGREGAR/SUMAR MESES");
NUEVA_FECHA.setMonth(7);
console.log(NUEVA_FECHA);


console.log("----------------------------------------");
console.log("AGREGAR/SUMAR MESES QUE SEAN MAYOR A LOS QUE TRAE EL AÑO");
NUEVA_FECHA.setMonth(13);
console.log(NUEVA_FECHA);


console.log("----------------------------------------");
console.log("AGREGAR/SUMAR DIAS");
NUEVA_FECHA.setDate(8);
console.log(NUEVA_FECHA);


console.log("----------------------------------------");
console.log("AGREGAR/SUMAR DIAS QUE SEAN MAYOR A LOS QUE TRAE EL MES");
NUEVA_FECHA.setDate(50);
console.log(NUEVA_FECHA);


console.log("----------------------------------------");
console.log("AGREGAR/SUMAR HORAS");
NUEVA_FECHA.setHours(14);
console.log(NUEVA_FECHA);


console.log("----------------------------------------");
console.log("AGREGAR/SUMAR HORAS QUE SEAN MAYOR A LOS QUE TRAE EL DIA");
NUEVA_FECHA.setHours(25);
console.log(NUEVA_FECHA);


console.log("----------------------------------------");
console.log("AGREGAR/SUMAR MINUTOS");
NUEVA_FECHA.setMinutes(30);
console.log(NUEVA_FECHA);


console.log("----------------------------------------");
console.log("AGREGAR/SUMAR MINUTOS QUE SEAN MAYOR A LOS QUE TRAE LA HORA");
NUEVA_FECHA.setMinutes(90);
console.log(NUEVA_FECHA);


console.log("----------------------------------------");
console.log("MODIFICAR EL PROTOTIPO DE DATE PARA SUMAR/RESTAR DIAS");

// ESTA MODIFICACION CONLLEVA AGREGAR UNA FUNCION AL CONSTRUCTOR "DATE" PROPIO DE JS

const SEGUNDA_FECHA = new Date(1993, 6, 4);

Date.prototype.sumarDias = function(dias) {
  console.log("ESTO ES THIS");
  console.log(this);

  this.setDate(this.getDate() + dias);

  console.log("ESTO ES EL NUEVO THIS");
  console.log(this);

  return this;
}

console.log(NUEVA_FECHA.sumarDias(10));
console.log(SEGUNDA_FECHA.sumarDias(-20));
