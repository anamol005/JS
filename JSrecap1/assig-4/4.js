const score = Number(prompt('Enter your score:'));

if (score >= 0 && score <= 39) {
  document.write('<p>Your grade is 0.</p>');
} else if (score <= 51) {
  document.write('<p>Your grade is 1.</p>');
} else if (score <= 63) {
  document.write('<p>Your grade is 2.</p>');
} else if (score <= 75) {
  document.write('<p>Your grade is 3.</p>');
} else if (score <= 87) {
  document.write('<p>Your grade is 4.</p>');
} else if (score <= 100) {
  document.write('<p>Your grade is 5.</p>');
}
