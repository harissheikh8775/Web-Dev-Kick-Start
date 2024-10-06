const fs = require('fs')

const content1 = fs.readFileSync('a.txt', 'utf-8')
console.log(content1);

const content2 = fs.readFileSync("b.txt", "utf-8");
console.log(content1);

const content3 = fs.readFileSync("c.txt", "utf-8");
console.log(content1);

//in synchronous we do one by one task i.e we complete one then start the other