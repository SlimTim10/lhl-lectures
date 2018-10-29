this.name = 'Alice';

function old_way() {
  console.log(this.name);
}

old_way();

const new_way = () => {
  console.log(this.name);
}

new_way();
