//if else statement to check an even or odd
function evenOrOdd(num) {
    if (num % 2 == 0) {
        return "The given number is an even number.";
    }
    else {
        return "The given number is an odd number."
    }
}
const num = 7;
console.log(evenOrOdd(num));