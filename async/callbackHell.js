function hello(name, myCallback) {
  // console.log("Hola, soy una funcion asíncrona");
  setTimeout(() => {
    console.log("Hola, ", name);
    myCallback(name);
  }, 5000);
}

const talk = (callbackSpeak) => {
  setTimeout(() => {
    console.log("Bla, bla, bla,");
    callbackSpeak();
  }, 3000);
};

const bye = (name, otherCallback) => {
  setTimeout(() => {
    console.log("Adios, ", name);
    otherCallback();
  }, 2000);
};

const conversation = (name, times, callback) => {
  if (times > 0) {
    talk(() => {
      conversation(name, --times, callback);
    });
  } else {
    bye(name, callback);
  }
};

// ----------

console.log("Iniciando proceso");

hello("Edilberto", (name) => {
  conversation(name, 3, () => {
    console.log("Proceso terminado");
  });
});

// hello("Edilberto", (name) => {
//   bye(name, () => {
//     console.log("Terminamos");
//   });
// });

// hello("Edilberto", (name) => {
//   talk(() => {
//     talk(() => {
//       bye(name, () => {
//         console.log(console.log("Terminando proceso"));
//       });
//     });
//   });
// });
