//can vote function
function canVote(age) {
    if (age < 1) {
        return "Please provide valid age."
    }
    if (age < 18) {
        return false;
    }
    else {
        return true;
    }
}
let age = -1;
console.log(canVote(age))