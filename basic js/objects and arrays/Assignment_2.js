//Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
function greet(user) {
    let salutation;

    if (user.gender === "male") {
        salutation = "Mr.";
    } else if (user.gender === "female") {
        salutation = "Mrs.";
    } else {
        salutation = "Others";
    }
     console.log(`Hi ${salutation} ${user.name}, your age is ${user.age}.`);
    if (user.age >= 18) {
        console.log("Congrats you can vote.");
    }
    else {
        console.log("Alas you can't vote.");
    }
   

}

let userData = {
    name: "Haris",
    age: 20,
    gender:"male"
}
greet(userData)