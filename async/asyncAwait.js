const hello = async (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hola, ", name);
      resolve(name);
    }, 1500);
  });
};

const talk = async (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla, bla, bla...");
      resolve(name);
      // reject("hay un error");
    }, 1000);
  });
};

const bye = async (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios, ", name);
      resolve();
    }, 500);
  });
};

const main = async () => {
  let name = await hello("Edilberto");
  await talk();
  await talk();
  await talk();
  await bye(name);
};

console.log("Inicia el proceso");
main();
console.log("Termina el proceso");
