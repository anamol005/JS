function sortArray(numbers, order) {
  const sortedNumbers = [...numbers];

  if (order === 'asc') {
    sortedNumbers.sort(function (a, b) {
      return a - b;
    });
  } else if (order === 'desc') {
    sortedNumbers.sort(function (a, b) {
      return b - a;
    });
  }

  return sortedNumbers;
}

const numbers = [5, 2, 8, 1, 9];

console.log('Original array:', numbers);

console.log('Ascending:', sortArray(numbers, 'asc'));

console.log('Descending:', sortArray(numbers, 'desc'));
