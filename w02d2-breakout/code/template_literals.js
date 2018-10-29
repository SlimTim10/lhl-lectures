function old_way() {
  var person = {
    name: 'Alice',
    age: 25,
    food: 'spam'
  };

  console.log(person.name + ' is ' + person.age + ' years old and their favourite food is ' + person.food + '.');
}

// old_way();

function new_way() {
  const person = {
    name: 'Alice',
    age: 25,
    food: 'spam'
  };

  console.log(`${person.name} is ${person.age} years old and their favourite food is ${person.food}.`);
}

// new_way();
