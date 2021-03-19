/*
  FROM : https://leetcode.com/problems/single-number/

  Given a non-empty array of integers nums, every element appears twice except for one.
  Find that single one.

  I : array of integers
  O : number
  E : n/a
  C :
  - linear time
  - constant space

  SOLUTION IDEA 1
  - o(n) linear time
  - o(n) linear space
  construct a frequency counter object
  filter object down to frequencies of 1 & return the key

  SOLUTION IDEA 2
  - O(2n) linear time
  - O(1) constant space
  sort nums
  if nums[0] != nums[1] return nums[0]
  start at nums[1] and iterate over each item in nums
    if current num !== prevNum && currentNum !== nextNum return currentNum

*/

const singleNumber = (nums) => {

};

console.log(singleNumber([2,2,1])) // 1
console.log(singleNumber([4,1,2,1,2])) // 4
console.log(singleNumber([1])) // 1
