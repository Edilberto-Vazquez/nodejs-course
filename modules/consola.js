let tabla = [
  {
    a: 1,
    b: 2,
  },
  {
    c: 3,
    d: 4,
  },
];

console.log("Muestra un mensaje en consola");
console.info("Muestra la info de lo que paso");
console.error("Muestra los errores");
console.warn("Muestra errores mas fuertes");

console.table(tabla); // muestra una tabla con formato

console.group("Conversacion");
console.log("Hola");
console.log("Bla");
console.log("bla");
console.log("Adios");
console.groupEnd();
