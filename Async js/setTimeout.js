console.log("Hi this is the start of setTimeout function");

function timeout() {
    console.log("Welcome this is a callback.");
}

setTimeout(timeout, 5000);

console.log("This is the end of setTimeout.");
//as this setTimeout is an async function
//therefore output will be like

//Hi this is the start of setTimeout function
//This is the end of setTimeout.
//Welcome this is a callback.