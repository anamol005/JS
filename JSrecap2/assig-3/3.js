const numbers = [];

let input = prompt("Enter a number (or 'done' to finish):");

while (input !== 'done') {
  numbers.push(Number(input));

  input = prompt("Enter a number (or 'done' to finish):");
}

let evenNumbers = [];

for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

if (evenNumbers.length > 0) {
  document.write('<p>Even Numbers: ' + evenNumbers.join(', ') + '</p>');
} else {
  document.write('<p>Even Numbers: None</p>');
}

document.write('<p>Program ended.</p>');
