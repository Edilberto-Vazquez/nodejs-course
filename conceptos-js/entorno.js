require("dotenv").config();

let nombre = process.env.NAME || "sin nombre";
let web = process.env.WEB || "no tengo web";

console.log("Hola", nombre);
console.log("Mi web es", web);
