/**
 * write a function that accepts an array of integers and a number called n
 * the function should calculate the maximim sum of n consecutive elements in the array
 */

// // NAIVE SOLUTION (broken)
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

// NAIVE SOLUTION (works)
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

// // SLIDING WINDOWS SOLUTION
//  const maxSubarraySum = (arr, n) => {
//   if (arr.length === 0 || arr.length < n) { return null; }
//   if (n === 0) { return 0; }
//   if (arr.length === n) { return arr.reduce((num, acc) => num + acc)}

//   // set maxSum to sum of first n elements of arr
//   let maxSum = 0;
//   for (let i = 0; i < n; i++) {
//     maxSum += arr[i]
//   }
//   // initialize windowStart var
//   let windowStart = n - 1;
//   // initialize windowEnd var
//   let windowEnd = windowStart + (n - 1);
//   // iterate over arr from nth element to arr.len - nth element... for each
//   while (windowStart <= arr.length - n){
//     // set tmpSum var to maxSum MINUS prev item PLUS next item
//     let tmpSum = maxSum - arr[windowStart] + arr[windowEnd];
//     // reset maxSum if tmpSum > maxSum
//     maxSum = Math.max(tmpSum, maxSum);
//     windowStart++;
//     windowEnd++;
//   }
//   return maxSum;
// };

// // SLIDING WINDOWS SOLUTION
// const maxSubarraySum = (arr, n) => {
//   if (arr.length === 0 || arr.length < n) { return null; }
//   if (n === 0) { return 0; }
//   if (arr.length === n) { return arr.reduce((num, acc) => num + acc); }
//   // if (n === 1) { return Math.max(...arr); }

//   let maxSum = 0;
//   for (let i = 0; i < n; i++) {
//     maxSum += arr[i]
//   }
//   let tmpSum = maxSum;
//   let windowStart = n - 1;
//   let windowEnd = windowStart + (n - 1);
//   while (windowStart <= arr.length - n){
//     tmpSum = tmpSum - arr[windowStart - 1] + arr[windowEnd];
//     maxSum = Math.max(tmpSum, maxSum);
//     windowStart++;
//     windowEnd++;
//   }
//   return maxSum;
// };

const maxSubarraySum = (arr, n) => {
  let maxSum = 0;
  if (arr.length < n) { return null; }
  for (let i = 0; i < n; i++) {
    maxSum += arr[i]
  }
  let tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)) // 17
console.log(maxSubarraySum([4,2,1,6], 1)) // 6
console.log(maxSubarraySum([4,2,1,6,2], 4)) // 13
console.log(maxSubarraySum([], 4)) // null