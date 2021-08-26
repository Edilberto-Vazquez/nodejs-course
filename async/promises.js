const hello = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hola, ", name);
      resolve(name);
    }, 1500);
  });
};

const talk = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla, bla, bla...");
      // resolve(name);
      reject("hay un error");
    }, 1000);
  });
};

const bye = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios, ", name);
      resolve();
    }, 500);
  });
};

// -----------

console.log("Iniciando el proceso...");
hello("Edilberto")
  .then(talk)
  .then(talk)
  .then(talk)
  .then(bye)
  .then((nombre) => console.log("Terminado el proceso"))
  .catch((error) => console.error("Ha habido un error", error))
  .finally(() => {
    console.log("Proceso terminado");
  });
