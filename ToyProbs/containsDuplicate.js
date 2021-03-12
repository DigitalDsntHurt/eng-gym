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

const containsDuplicate = (nums) => {
  const counter = {};
  nums.forEach(n => ++counter[n] || counter[n] = 1 )
  return counter
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
