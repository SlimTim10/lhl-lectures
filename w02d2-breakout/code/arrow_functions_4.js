const my_numbers = [1,2,3,4,5];

function old_sum(numbers) {
  return numbers.reduce(function (acc, n) {
    return acc + n;
  });
}

console.log(old_sum(my_numbers));

const new_sum = numbers => numbers.reduce((acc, n) => acc + n);

console.log(new_sum(my_numbers));
