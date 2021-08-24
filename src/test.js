const a = "50";
const b = 100;
export const f1 = () => 99;
const saludar = () => "Hola";
const goodbye = () => "Adios";
class Clase {}


export { a as default };
export { b };
export { saludar, goodbye as despedir };
export { Clase };
export { saludar as Bienvenido };
