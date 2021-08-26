function hola(nombre, myCallback) {
  // console.log("Hola, soy una funcion asíncrona");
  setTimeout(() => {
    console.log("Hola, ", nombre);
    myCallback(nombre);
  }, 5000);
}

const adios = (nombre, otherCallback) => {
  setTimeout(() => {
    console.log("Adios, ", nombre);
    otherCallback();
  }, 2000);
};

console.log("Iniciando proceso");

hola("Edilberto", (nombre) => {
  adios(nombre, () => {
    console.log(console.log("Terminando proceso"));
  });
});

// hola("Edilberto", () => {});
// adios("Edilberto", () => {});
