const numbers = [];

const number1 = Number(prompt('Enter Number 1:'));
const number2 = Number(prompt('Enter Number 2:'));
const number3 = Number(prompt('Enter Number 3:'));
const number4 = Number(prompt('Enter Number 4:'));
const number5 = Number(prompt('Enter Number 5:'));

numbers.push(number1);
numbers.push(number2);
numbers.push(number3);
numbers.push(number4);
numbers.push(number5);

console.log('Numbers:', numbers);

const searchNumber = Number(prompt('Enter a Number to Search:'));

if (numbers.includes(searchNumber)) {
  console.log('Number ' + searchNumber + ' is found in the array.');
} else {
  console.log('Number ' + searchNumber + ' is not found in the array.');
}

numbers.pop();

console.log('Updated Numbers:', numbers);

numbers.sort(function (a, b) {
  return a - b;
});

console.log('Sorted Numbers:', numbers);
