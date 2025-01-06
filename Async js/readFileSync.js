//import a file
const fs = require("fs");

const content_A = fs.readFileSync("a.txt", "utf-8");
console.log(content_A);

const content_B = fs.readFileSync("b.txt", "utf-8");
console.log(content_B);