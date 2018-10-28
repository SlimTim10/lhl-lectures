function var_example() {
  var names = ['Alice', 'Bob', 'Carol'];
  
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
  
  // console.log(i); // Will this work?
}

// console.log('var example');
// var_example();

// console.log(names); // Will this work?


function let_example() {
  let names = ['Alice', 'Bob', 'Carol'];
  
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
  
  // console.log(i); // Will this work?
}

// console.log('let example');
// let_example();


function const_example() {
  const names = ['Alice', 'Bob', 'Carol'];

  // names.push('Dean'); // Will this work?

  // names = ['Alice']; // Will this work?
  
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

console.log('const example');
const_example();


function final_example() {
  const names = ['Alice', 'Bob', 'Carol'];

  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

// console.log('final example');
// final_example();
