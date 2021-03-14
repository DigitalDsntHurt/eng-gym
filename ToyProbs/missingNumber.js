/*
  Given an array nums containing n distinct numbers in the range [0, n],
  return the only number in the range that is missing from the array.

  Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

  I : array (of numbers, unique, contiguous)
  O : number
  E : no inputs, input not array, input array contains not numbers, input array contains not distinct, contiguous numbers
  C :
  - o(n) time
  - o(1) space
*/

const missingNumber = function(nums) {
  
};

console.log(missingNumber([3,0,1])) // 2
console.log(missingNumber([0,1])) // 2
console.log(missingNumber([[9,6,4,2,3,5,7,0,1]])) // 8
console.log(missingNumber([0])) // 1
