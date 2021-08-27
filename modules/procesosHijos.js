const { exec, spawn } = require("child_process");
// const { stdout } = require("process")

// exec("ls -la", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }
//   console.log(stdout);
// });

let ls = spawn("ls", ["-lh", "/home/edilberto/"]);

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.on("exit", (code) => {
  console.log(`Acerca de las desconexion con codigo ${ls.killed}`);
});
