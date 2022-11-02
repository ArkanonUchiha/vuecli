// OBJETO GLOBAL DEL LADO DEL CLIENTE
console.log(window);

// -----------------------------------------------------

// FUNCION CON VARIABLES PRIMITIVAS COMO PARAMETRO
function imprimir(nombre, apellido) {
  apellido = apellido || "xxxx";

  console.log("Hola, me llamo " + nombre + " " + apellido);

  // if (apellido === undefined) {
  //   apellido = "XXXX";
  //   console.log("Hola, me llamo " + nombre + " " + apellido);
  // }
}


// MISMA FUNCION PERO CON ARROW FUNCTION
// let imprimir = (nombre, apellido) => {
//   apellido = apellido || "xxxx";

//   console.log("Hola, me llamo " + nombre + " " + apellido);
// }


// FUNCION CON OBJETO COMO PARAMETRO
function imprimirDos(persona) {
  console.log("Me llamo " + persona.nombre + " " + persona.apellido + ", y tengo " + persona.edad + " años");
}


// MISMA FUNCION PERO CON ARROW FUNCTION
// let imprimirDos = persona => 
//   console.log("Me llamo " + persona.nombre + " " + persona.apellido + ", y tengo " + persona.edad + " años");


// FUNCION CON FUNCION COMO PARAMETRO
function imprimirTres(fn) {
  console.log("SALUDOS DESDE MEXICO");
  fn();
}


// MISMA FUNCION PERO CON ARROW FUNCTION
// let imprimirTres = fn => {
//   console.log("SALUDOS DESDE CDMX");
//   fn();
// }


// -----------------------------------------------------

// FUNCION QUE DEVUELVE VALOR DE VARIABLES PRIMITIVAS
function obtenerResultado() {
  var
  a = 60,
  b = 60,
  resultado = a + b * Math.random();
  // var aleatorio = Math.random();

  return resultado;
}


// MISMA FUNCION PERO CON ARROW FUNCTION
// let obtenerResultado = () => {
//   var
//   a = 60,
//   b = 60,
//   resultado = a + b * Math.random();

//   return resultado;
// }


function getName() {
  return "Edwin Brandon";
}


// MISMA FUNCION PERO CON ARROW FUNCTION
// let getName = () => {
//   return "Edwin Brandon";
// }


function compara () {
  if(obtenerResultado() > 500){
    return true;
  }
  else {
    return false;
  }
}


// MISMA FUNCION PERO CON ARROW FUNCTION
// let compara = () => {
//   if(obtenerResultado() > 500){
//     return true;
//   }
//   else {
//     return false;
//   }
// }


// FUNCION QUE RECIBE PARAMETROS Y DEVUELVE UN OBJETO COMO VALOR
function crearPersona(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido
  };
}


// MISMA FUNCION PERO CON ARROW FUNCTION
// let crearPersona = (nombre, apellido) => {
//   return {
//     nombre: nombre,
//     apellido: apellido
//   };
// }


// FUNCION QUE DEVUELVE OTRA FUNCION
function creaFuncion() {
  return function(nombre, apellido) {
    console.log("Soy una funcion anonima retornada... " + nombre, apellido);

    return function() {
      console.log("Soy una segunda funcion anonima retornada, dentro de otra funcion retornada. Me creó " + nombre, apellido);
    }
  }
}


// MISMA FUNCION PERO CON ARROW FUNCTION
// let creaFuncion = () => {
//   return function(nombre, apellido) {
//     console.log("Soy una funcion anonima retornada. Me creó " + nombre + " " + apellido);

//     return function() {
//       console.log("Soy una segunda funcion anonima retornada, dentro de otra funcion retornada.");
//     }
//   }
// }

// -----------------------------------------------------

// FUNCIONES DE PRIMERA CLASE
function primeraClase() {
  console.log("Me llamo Funcion primeraClase");
}


// MISMA FUNCION PERO CON ARROW FUNCTION
// let primeraClase = () => 
//   console.log("Me llamo Funcion primeraClase");

// -----------------------------------------------------

// RECURSIVIDAD
function cuentaAtras(x) {
  console.log(x);

  if(x > 0){
    cuentaAtras(x-1);
  }
}


// MISMA FUNCION PERO CON ARROW FUNCTION
// let cuentaAtras = x => {
//   console.log(x);

//   if(x > 0){
//     cuentaAtras(x-1);
//   }
// };

// -----------------------------------------------------

// FUNCIONES COMO VALORES DE UNA PROPIEDAD DE UN OJETO
// EL OBJETO this
var persona = {
  nombre: "Areli",
  apellido: "Giselle",
  imprimirNombre: function() {
    console.log("Nombre Completo");
    console.log(this);
    console.log(this.nombre, this.apellido);
  },
  direccion: {
    pais: "Mexico",
    estado: "Chiapas",
    municipio: "Tuxtla Gutierrez",
    obtenerPais: function() {
      console.log(this);
      console.log(this.pais, this.estado, this.municipio);

      var self = this;

      var nuevaDireccion = function() {
        console.log(self);
        console.log("VALORES POR REFERENCIA: " + self.municipio, self.estado, self.pais);
      }

      nuevaDireccion();
    }
  }
};


// MISMA FUNCION PERO CON ARROW FUNCTION (REVISAR?)
// PRIMER EJEMPLO DE EL VALOR DE THIS EN UNA ARROW FUNCTION
// let persona = {
//   nombre: "Areli",
//   apellido: "Giselle",
//   imprimirNombre: () => {
//     console.log(this === window);
//     console.log("THIS DENTRO DE imprimirNombre: " + this);
//     console.log(this);
//     console.log(persona.nombre, persona.apellido);
//   },
//   direccion: {
//     pais: "Mexico",
//     estado: "Chiapas",
//     municipio: "Tuxtla Gutierrez",
//     obtenerPais: function() {
//       console.log("THIS DENTRO DE obtenerPais: " + this.pais, this.estado, this.municipio);
//       console.log(this);

//       var nuevaDireccion = () => {
//         console.log("THIS DENTRO DE nuevaDireccion: " + this.municipio, this.estado, this.pais);
//       }

//       nuevaDireccion();
//     }
//   }
// };


// VARIANTE DEL PRIMER EJEMPLO DE EL VALOR DE THIS EN UNA ARROW FUNCTION
// let persona = {
//   nombre: "Areli",
//   apellido: "Giselle",
//   imprimirNombre: (jugador) => {
//     console.log(this === window);
//     console.log("THIS DENTRO DE imprimirNombre: " + jugador.nombre);
//     console.log(this);
//     console.log(persona.nombre, persona.apellido, persona.direccion.municipio);
//   },
//   direccion: {
//     pais: "Mexico",
//     estado: "Chiapas",
//     municipio: "Tuxtla Gutierrez",
//     obtenerPais: function() {
//       console.log("THIS DENTRO DE obtenerPais: " + this.pais, this.estado, this.municipio);
//       console.log(this);

//       var nuevaDireccion = () => {
//         console.log("THIS DENTRO DE nuevaDireccion: " + this.municipio, this.estado, this.pais);
//       }

//       nuevaDireccion();
//     }
//   }
// };

// SEGUNDO EJEMPLO DE EL VALOR DE THIS DENTRO DE UNA ARROW FUNCTION
const myObject = {
  myMethod(items) {
    console.log("PRIMER this:");
    console.log(this);

    const callback = () => {
      console.log("SEGUNDO this:");
      console.log(this);
    };

    items.forEach(callback);
  }
};


// TERCER EJEMPLO DE EL VALOR DE THIS DENTRO DE UNA ARROW FUNCTION
let usuario = {
  nombre: 'Jimmy the Greek',
  sayName: (obj) => {
    console.log(obj.nombre);
  }
};

// -----------------------------------------------------

// EL OBJETO ESPECIAL "ARGUMENTS" EN UNA REGULAR FUNCTION
function myFunction() {
  console.log(arguments);
  console.log(arguments.length);
}

// EL OBJETO ESPECIAL "ARGUMENTS" EN UNA ARROW FUNCTION QUE ESTA DENTRO DE UNA REGULAR FUNCTION
function myRegularFunction() {
  const myArrowFunction = () => {
    console.log(arguments);
  };

  myArrowFunction('c', 'd');
}

// EL PARAMETRO REST "...args" DE UNA ARROW FUNCTION
function myRegularFunction2() {
  const myArrowFunction2 = (...args) => {
    console.log(args);
  }

  myArrowFunction2('C', 'D');
}

// -----------------------------------------------------

// EL RETURN IMPLICITO DE LAS ARROW FUNCTION CON UNA SOLA EXPRESION (SIN LLAVES)
const incremento = (num) => num + 1;

// -----------------------------------------------------

// USANDO UNA REGULAR FUNCTION PARA DEFINIR UN METODO, DENTRO DE UNA CLASE
class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }

  logName() {
    console.log(this.heroName);
  }
}

// USANDO UNA ARROW FUNCTION PARA DEFINIR UN METODO, DENTRO DE UNA CLASE
class Hero2 {
  constructor(heroName2) {
    this.heroName2 = heroName2;
  }

  logName2 = () => {
    console.log(this.heroName2);
  }
}

// -----------------------------------------------------

// LA PALABRA RESERVADA 'NEW'
function jugador() {}

function jugador2() {
  this.nombres = "Edwin Brandon";
  this.apellidos = "Lopez Martinez";
  this.edad = 28;
  // this.imprimirJugador2 = function() {
  this.imprimirJugador2 = () => {
    return this.nombres + " " + this.apellidos + " y tengo " + this.edad + " años.";
  }
  console.log("Estoy dentro de la funcion 'jugador2'");
}

function jugador3(nombres, apellidos, edad) {
  this.nombres = nombres;
  this.apellidos = apellidos;
  this.edad = edad;
  this.imprimirJugador3 = () => {
    return this.nombres + " " + this.apellidos + " y tengo " + this.edad + " años.";
  }
}

// -----------------------------------------------------

// PROTOTIPOS (PROTOTYPE) EN ES5
// CREACION DE UNA CLASE (FUNCION CONSTRUCTORA)
function Polygon(height, width) {
  this.height = height;
  this.width = width;
}

// CLASE (FUNCION CONSTRUCTORA) QUE HEREDA DE OTRA CLASE (FUNCION CONSTRUCTORA)
function Square(side) {
  this.prototype = Object.create(Polygon.prototype)
  Polygon.call(this, side,side);
  this.getArea = function() {
    return this.height * this.width;
  }
}



// PROTOTIPOS (PROTOTYPE) EN ES6+
// CREACION DE UNA CLASE
class Polygon2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// CLASE QUE HEREDA DE OTRA CLASE (EXTENDS = HERENCIA)
class Square2 extends Polygon2 {
  constructor(side) {
    super(side, side);
  }

  getArea() {
    return this.height * this.width;
  }
}

// -----------------------------------------------------

// FUNCIONES typeof e instanceof

function identificaTypeOf(param) {
  console.log(typeof param);

  if(typeof param == 'function') {
    param();
  } else {
    console.log(param);
  }
}

function identificaInstanceOf(param) {
  console.log(param instanceof primeraFunc);
}

function primeraFunc() {
  this.nombre = 'Brandon';
  this.apellido = 'Lopez';
}

// -----------------------------------------------------

export {
  imprimir,
  imprimirDos,
  imprimirTres,
  obtenerResultado,
  getName,
  compara,
  crearPersona,
  creaFuncion,
  primeraClase,
  cuentaAtras,
  persona,
  myObject,
  usuario,
  myFunction,
  myRegularFunction,
  myRegularFunction2,
  incremento,
  Hero,
  Hero2,
  jugador,
  jugador2,
  jugador3,
  Square,
  Square2,
  identificaTypeOf,
  identificaInstanceOf,
  primeraFunc
};

// -----------------------------------------------------
