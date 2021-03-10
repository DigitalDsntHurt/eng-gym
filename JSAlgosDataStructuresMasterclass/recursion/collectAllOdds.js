

// // Iterative Solution
// // time complexity : O(n)
// // space complexity: O(n)
// const collectAllOdds = (arr) => {
//   const odds = [];
//   arr.forEach(num => {if(num % 2 !== 0) { odds.push(num) }})
//   return odds;
// };
// console.log(collectAllOdds([1,2,3,4,5,6,7,8])) // [1,3,5,7]

// Optimized Iterative Solution
// time complexity : O(n) ... or is this O(n**2) and we just improved space complexity and drastsically degraded time complexity?
// space complexity: O(1)
// const collectAllOdds = (arr) => {
//   arr.forEach((num, i) => { if(num % 2 === 0) { arr.splice(i, 1) }})
//   return arr;
// };
// console.log(collectAllOdds([1,2,3,4,5,6,7,8])) // [1,3,5,7]

// Helper Method Recursion Solution
const collectAllOdds = (arr) => {
  const odds = [];
  const collectOdds = (inputArray) => {
    if (inputArray.length === 0) { return; }
    if (inputArray[0] % 2 !== 0) { odds.push(inputArray[0])}
    collectOdds(inputArray.slice(1));
  };
  collectOdds(arr);
  return odds;
};
console.log(collectAllOdds([1,2,3,4,5,6,7,8])) // [1,3,5,7]

// // Pure Recursion Solution
// const collectAllOdds = (arr) => {
//
// };
// console.log(collectAllOdds([1,2,3,4,5,6,7,8])) // [1,3,5,7]



// // Helper Method Recursion
// const collectAllOdds = (arr) => {
//   let odds = [];
//   const isOdd = (nums) => {
//     if (nums.length === 0) { return; }
//     if (nums[0] % 2 !== 0) { odds.push(nums[0]); }
//     isOdd(nums.slice(1))
//   }
//   isOdd(arr);
//   return odds;
// };
// console.log(collectAllOdds([1,2,3,4,5,6,7,8])) // [1,3,5,7]
