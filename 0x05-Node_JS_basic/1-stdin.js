// Takes user input name from cli
// Returns its and closes

const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  'Welcome to Holberton School, what is your name?\n',
  (name) => {
    console.log(`Your name is: ${name}!`);
    readline.close();
  },
);

readline.on('close', () => {
  console.log('This important software is now closing');
});
