//reading the file asynchronously
// Import the 'fs' (File System) module, which provides methods to work with the file system in Node.js
const fs = require("fs");

// Read the contents of the file 'a.txt' asynchronously with utf-8 encoding
fs.readFile("a.txt", "utf-8", function (err, content_A) {
    // If an error occurs while reading the file, 'err' will contain the error information
    // If 'err' is null, it means the file was read successfully
    if (err) {
        console.error("Error reading a.txt:", err); // Log the error (optional error handling)
        return;
    }
    // Log the content of 'a.txt' to the console if no error occurs
    console.log(content_A);
});

// Read the contents of the file 'b.txt' asynchronously with utf-8 encoding
fs.readFile("b.txt", "utf-8", function (err, content_B) {
    // Handle any error that might occur while reading 'b.txt'
    if (err) {
        console.error("Error reading b.txt:", err); // Log the error (optional error handling)
        return;
    }
    // Log the content of 'b.txt' to the console if no error occurs
    console.log(content_B);
});


