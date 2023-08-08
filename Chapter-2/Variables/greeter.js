let readlineSync = require('readline-sync');

// const name = 'Victor';
// console.log(`Good morning ${name} `);
// console.log(`Good afternoon ${name} `);
// console.log(`Good evening ${name} `);

// const age = 10;
// console.log(`in 10 years, you will be ${age + 10} years old`);
// console.log(`in 20 years, you will be ${age + 20} years old`);
// console.log(`in 30 years, you will be ${age + 30} years old`);
// console.log(`in 40 years, you will be ${age + 40} years old`);

// function getFullName(prompt) {
//   let readlineSync = require('readline-sync');
//   let name = readlineSync.question('what is your first name?');
//   return name;
// }
// let firstName = getFullName('enter first name');
// let lastName = getFullName('enter last name');
// console.log(`your name is ${firstName} ${lastName}`);

//Multiplication with two separate functions. One performs operation, second gathers inputs.
//Define a function that multiplies two args
function multiply(a, b) {
  let product = a * b;
  return product;
}

function getNums(prompt) {
  return readlineSync.question(prompt);
}

let firstNum = getNums('enter first num');
let secondNum = getNums('enter second num');
console.log(multiply(firstNum, secondNum));
