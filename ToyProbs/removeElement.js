/*
FROM : https://leetcode.com/problems/remove-element/

Given an array nums and a value val, remove all instances of that value in-place and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.

 I :
  - array of numbers
  - number

 O : number (length of array with all intances of number removed )

 E :

 C :
  - O(n) linear time
  - O(1) constant space

  STRATEGY


  APPROXIMATION
*/

// const removeElement = (nums, val) => {
//   let counter = 0;
//   let ranger = 0;
//
//   while (ranger < nums.length) {
//     if (nums[ranger] === val) {
//       counter++;
//       ranger++;
//     } else {
//       ranger++;
//     }
//   }
//   console.log(nums)
//   return nums.length - (counter);
// };

const removeElement = (nums, val) => {
  let ranger = 0;
  while (ranger < nums.length) {
    if (nums[ranger] === val) {
      nums.splice(ranger, 1)
    } else {
      ranger++;
    }
  }
  console.log(nums)
  return nums.length;
};

console.log(removeElement([3,2,2,3], 3)); // 2
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // 5
