const fs = require('fs')

//this is the way of reading another file by importing them
const data = fs.readFileSync('a.txt', 'utf-8')
console.log(data)