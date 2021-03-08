

// Pure Recursion
const collectAllOdds = (arr) => {
  
};
console.log(collectAllOdds([1,2,3,4,5,6,7,8])) // [1,3,5,7]

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
