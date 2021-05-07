/*
  // STRATEGY #1
  iterate over each item in the array
    calculate item's square
    replace current array item with squared array item
  return array

  The approach below is O(n) time and O(1) space
  But it only works for array input with positive numbers
  For a more generic solution we need to account for the fact that the order
  changes whne dealing with arrays of negative and both positive and negative
  numbers.
*/
// function sortedSquaredArray(array) {
//   for (var i = 0; i < array.length; i++) {
//     array[i] = array[i] * array[i];
//   }
//   return array;
// }

/*
  // STRATEGY #2
  create a new empty array for sorted results
  initiate two pointers: a small pointer and a large pointer pointing to the
  first and last array items respectively

  compare the absolute values of the items at each pointer
  choose the smaller absolute value
  square the chosen value
  push it onto the sorted results array
  if the squared value was from the small pointer increment the small pointer
  if the squared value was from the large pointer decrement the large pointer

  return sorted results array
*/
function sortedSquaredArray(array) {

}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])) // [1,4,9,25,36,64,81]
console.log(sortedSquaredArray([0])) // [0]
console.log(sortedSquaredArray([10])) // [100]
console.log(sortedSquaredArray([-1])) // [1]
console.log(sortedSquaredArray([-5, -4, -3, -2, -1])) // [1,4,9,16,25]
console.log(sortedSquaredArray([-10, -5, 0, 5, 10])) // [0, 25, 25, 100, 100]
// console.log(sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]))
