function sortArray(numbers) {
  const sortedNumbers = [...numbers];

  sortedNumbers.sort(function (a, b) {
    return a - b;
  });

  return sortedNumbers;
}

const numbers = [5, 2, 10, 1, 9];

console.log('Original array:', numbers);
console.log('Sorted array:', sortArray(numbers));
