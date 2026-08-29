const side1 = Number(prompt('Enter the first side:'));
const side2 = Number(prompt('Enter the second side:'));
const side3 = Number(prompt('Enter the third side:'));

if (side1 === side2 && side2 === side3) {
  document.write('<p>The triangle is equilateral.</p>');
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  document.write('<p>The triangle is isosceles.</p>');
} else {
  document.write('<p>The triangle is scalene.</p>');
}
