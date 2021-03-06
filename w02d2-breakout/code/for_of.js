function old_way() {
  const names = ['Alice', 'Bob', 'Carol', 'Dean'];

  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

// old_way();

function new_way() {
  const names = ['Alice', 'Bob', 'Carol', 'Dean'];

  for (const name of names) {
    console.log(name);
  }
}

// new_way();

function other() {
  const names = ['Alice', 'Bob', 'Carol', 'Dean'];
  
  for (const name in names) {
    console.log(name);
  }
}

// other(); // Will this work?

function another() {
  const people = {
    Alice: 25,
    Bob: 26,
    Carol: 27,
    Dean: 28
  };

  for (const person of people) {
    console.log(age);
  }
}

// another(); // Will this work?

function how_about_strings() {
  const sentence = 'ES6 is better than ES2015';

  for (const letter of sentence) {
    console.log(letter);
  }
}

// how_about_strings(); // Will this work?
