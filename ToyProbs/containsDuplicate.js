/*
FROM : https://leetcode.com/problems/contains-duplicate/

Given an integer array nums, return true if any value appears at least twice
in the array, and return false if every element is distinct.

I : array
O : bool
E : empty array input, not array input, what about array contents?
C :

STRATEGY
iterate over array to compile a frequency counter obj
filter that freq counter obj for values > 1
if filtered values != 0 return false else return true
// this strategy would be linear space, linear time
*/

// // frequency counter pattern
// const containsDuplicate = (nums) => {
//   const counter = {};
//   nums.forEach(n => counter[n] = ++counter[n] || 1 )
//   let freqs = Object.entries(counter).map(pair => pair[1]);
//   return !freqs.every(freq => freq === 1);
// };
// // this is linear space & linear time, specifically O(3n)

// // use Set
// const containsDuplicate = (nums) => {
//   return new Set(nums).size < nums.length;
// };
// // this is constant space & linear time, specifically O(n). BUT we modify the input.

// // return early if we find a dup
const containsDuplicate = (nums) => {
  const freqs = {};
  for (let i = 0; i < nums.length; i++) {
    freqs[nums[i]] = ++freqs[nums[i]] || 1;
    if (freqs[nums[i]] > 1) { return true; }
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true
