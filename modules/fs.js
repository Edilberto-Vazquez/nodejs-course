// import * as fs from "fs/promises";
const fs = require("fs/promises");
// -----callback-----
// const read = (route, callback) => {
//   fs.readFile(route, (error, data) => {
//     console.log(data.toString());
//   });
// };

// const write = (route, content, callback) => {
//   fs.writeFile(route, content, (error) => {
//     if (error) {
//       console.log("no he podido escribir", error);
//     } else {
//       console.log("Lo he escribido");
//     }
//   });
// };

// const deleteFIle = (route, callback) => {
//   fs.unlink(route, callback);
// };

// read(__dirname + "/archivo.txt");

// write(
//   __dirname + "/archivo1.txt",
//   "soy un archivo nuevo",
//   console.log("cualquier cosa")
// );

// deleteFIle(__dirname + "/archivo1.txt", console.log);

// -----promises-----

// read file
const readFunction = async (path) => {
  try {
    const promise = await fs.readFile(path, { encoding: "utf8" });
    await promise;
    console.log("He leido");
  } catch (error) {
    console.log(`No he podido leer, ${error}`);
  }
};

readFunction(`${__dirname}/archivo.txt`);

// write file
const writeFunction = async (path, data) => {
  try {
    const promise = await fs.writeFile(path, data);
    await promise;
    console.log("He escrito");
  } catch (error) {
    console.log(`No he podido escribir, ${error}`);
  }
};

writeFunction(`${__dirname}/nuevo-archivo.txt`, "Soy un nuevo archivo");

// delete file

const deleteFunction = async (path) => {
  try {
    const promise = await fs.unlink(path);
    await promise;
    console.log("He borrado");
  } catch (error) {
    console.log(`No he borrar, ${error}`);
  }
};

deleteFunction(`${__dirname}/nuevo-archivo.txt`);

// const fileProcess = async () => {
//   try {
//     const read = await fs.readFile(`${__dirname}/archivo.txt`, {
//       encoding: "utf8",
//     });
//     console.log("He leido");
//     const write = await fs.writeFile(
//       `${__dirname}/nuevo-archivo.txt`,
//       "soy un nuevo archivo"
//     );
//     console.log("He escribido");
//     const remove = await fs.unlink(`${__dirname}/nuevo-archivo.txt`);
//     console.log("He removido");
//   } catch (error) {
//     console.log(error);
//   }
// };

// fileProcess();
