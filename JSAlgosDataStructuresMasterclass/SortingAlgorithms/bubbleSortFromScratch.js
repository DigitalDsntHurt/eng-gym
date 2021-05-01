

// SWAP HELPER
const swapItems = (arr, idx1, idx2) => {
  const tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}
// // test swapvalues
// let arr1 = [1,2,3]
// swapItems(arr1, 1, 2)
// console.log(arr1) //[1, 3, 2]
//
// let arr2 = [11,-22,'bubble']
// swapItems(arr2, 2, 0)
// console.log(arr2) //['bubble', -22, 11]

// // NESTED LOOPS
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j+1]) {
//         swapItems(arr, j, j+1);
//       }
//     }
//   }
//   return arr;
// };

/*
  the nested loop approach works but is super inefficient
  it has O(1) constant space complexity
  it has O(n**2) quadratic time complexity
  but because each time through the outer loop we're guaranteed to have
  completed sorting one element, the inner loop is doing extra work on each
  iteration, except the first.

  to solve this below, we're going to write an outer loop that
  counts down from the length of the input array,
  then use the outer loop's count-down variable to dynamically constrain
  the work being done by the inner loop at each iteration.
*/

// NESTED LOOPS WITHOUT EXTRA ITERATION
const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      swapItems(arr, j, j + 1);
    }
  }
  return arr;
};

/*
  the above solution prevents extra, unnecessary iterations by constraining
  the number of iterations performed by the inner loop
  but the time complexity is still quadratic.

  additionally, the above solution suffers from the defect that,
  if the outer loop every copmletes without swapping any elements
  we know the entire array is now sorted and could return early
  but in the above solution will continue their work.

  below, we will use a boolean flag to track if each iteration does
  in fact swap elements, and if it doesn't return early.
*/

// // NESTED LOOPS WITHOUT EXTRA ITERATION OPTIMIZED FOR NEARLY SORTED INPUTS
// const bubbleSort = (arr) => {
//
// };

console.log(bubbleSort([3,33,54,2,1])) // [1, 2, 3, 33, 54]
console.log(bubbleSort([3,-4,-5])) // [-5, -4, 3]
console.log(bubbleSort([11,12,13])) // [11,12,13]
