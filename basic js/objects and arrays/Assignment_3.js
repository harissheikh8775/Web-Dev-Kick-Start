//Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
//*********************ARRAYS OF OBJECTS*****************//


function filterAdultUsers(users) {
  const adults = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18 && users[i].gender==="male") {
      adults.push(users[i]);
    }
  }
  return adults;
}

// Example usage
const users = [
  { name: "Alice", age: 17, gender: "female" },
  { name: "Bob", age: 22, gender: "male" },
  { name: "Charlie", age: 19, gender: "male" },
  { name: "Diana", age: 15, gender: "female" },
];

const adults = filterAdultUsers(users);
console.log(adults);
