function random(resolve) {
    resolve();
}
let prom = new Promise(random);

function callback() {
    console.log("callback succeeded");
}
prom.then(callback);