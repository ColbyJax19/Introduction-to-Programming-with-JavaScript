let rlSync = require('readline-sync');
let firstName = rlSync.question('What is your first name??');
let lastName = rlSync.question('What is your last name??');
console.log(`Hello, ${firstName} ${lastName}`);

function say(text) {
  console.log('==> ' + text);
}

say('hello'); // => hello
say('hi'); // => hi
say('how are you'); // => how are you
say("I'm fine"); // => I'm fine

function greetPeople() {
  let greetingMessage = 'Good Morning!';
  console.log(greetingMessage);
}

greetPeople();
