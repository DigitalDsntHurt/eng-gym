/*
  // STRATEGY #1
  iterate over each item in the array
    calculate item's square
    replace current array item with squared array item
  return array
*/

function sortedSquaredArray(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] ** 2;
  }
  return array;
}



console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])) // [1,4,9,25,36,64,81]
console.log(sortedSquaredArray([0])) // [0]
console.log(sortedSquaredArray([10])) // [100]
console.log(sortedSquaredArray([-1])) // [1]
console.log(sortedSquaredArray([-5, -4, -3, -2, -1])) // [1,4,9,16,25]
console.log(sortedSquaredArray([-10, -5, 0, 5, 10])) // [0, 25, 25, 100, 100]
// console.log(sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]))
