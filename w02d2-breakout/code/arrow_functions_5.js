var person = {
  name: 'Alice',
  age: 25
};

person.printName = function() {
  console.log(this.name);
};

person.printName();

person.printNameArrow = () => {
  console.log(this.name);
};

person.printNameArrow();
