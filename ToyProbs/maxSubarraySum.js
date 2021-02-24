/**
 * write a function that accepts an array of integers and a number called n
 * the function should calculate the maximim sum of n consecutive elements in the array
 */

// // NAIVE SOLUTION (iterative)
// const maxSubarraySum = (arr, n) => {
//   if (arr.length === 0 || arr.length < n) { return null; }
//   if (n === 0) { return 0; }
//   if (arr.length === n) { return arr.reduce((num, acc) => num + acc)}

//   // initialize maxSum var = 0
//   let maxSum = 0
//   // for each item in arr (index range 0...arr.len - n)
//   for (let i = 0; i < (arr.length - n); i++) {
//     // initialize tmpSum var = 0
//     let tmpSum = arr[i]
//     // loop n items ahead of current item
//     for (let j = i + 1; j < (i + n); j++) {
//       // add each inner item to tmpSum
//       tmpSum += arr[j]
//     }
//     // if tmpSum > maxSum update maxSum = tmpSum
//     // console.log(maxSum)
//     // console.log(tmpSum)
//     maxSum = Math.max(maxSum, tmpSum)
//   }
//   return maxSum
// };

// NAIVE SOLUTION (iterative)
// const maxSubarraySum = (arr, n) => {
//   if (arr.length === 0 || arr.length < n) { return null; }
//   if (n === 0) { return 0; }
//   if (arr.length === n) { return arr.reduce((num, acc) => num + acc)}

//   let maxSum = 0
//   for (let i = 0; i <= (arr.length - n); i++) {
//     let tmpSum = arr[i]
//     for (let j = i + 1; j < (i + n); j++) {
//       tmpSum += arr[j]
//     }
//     maxSum = Math.max(maxSum, tmpSum)
//   }
//   return maxSum
// };

// SLIDING WINDOWS SOLUTION (iterative)
 const maxSubarraySum = (arr, n) => {
  if (arr.length === 0 || arr.length < n) { return null; }
  if (n === 0) { return 0; }
  if (arr.length === n) { return arr.reduce((num, acc) => num + acc)}

  // set maxSum to sum of first n elements of arr

  // initialize windowStart var
  // initialize windowEnd var

  // iterate over arr from nth element to arr.len - nth element... for each
    //
};

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)) // 17
console.log(maxSubarraySum([4,2,1,6], 1)) // 6
console.log(maxSubarraySum([4,2,1,6,2], 4)) // 13
console.log(maxSubarraySum([], 4)) // null