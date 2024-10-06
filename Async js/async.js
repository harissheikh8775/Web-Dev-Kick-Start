const fs = require('fs')

const content1 = fs.readFile('a.txt', 'utf-8', function (err, content1) {
    console.log(content1)
})

const content2 = fs.readFile("a.txt", "utf-8", function (err, content2) {
  console.log(content2);
});

const content3 = fs.readFile("a.txt", "utf-8", function (err, content3) {
  console.log(content3);
});

//in async all the tasks run parallelly