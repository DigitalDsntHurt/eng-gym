// Given a sorted array nums, remove the duplicates in-place
// such that each element appears only once and
// returns the new length.
//
// Do not allocate extra space for another array,
// you must do this by modifying the input array in-place with
// O(1) extra memory.

/*
  I : sorted array
  O : number
  E : ignore for now
  C : O(n) time | O(1) space

  STRATEGY
  start with two pointers
  - one at index 0
  - one at index 1
  while back pointer < array.length
    if values stored at pointers are same
      increment second pointer until value stored at its position does not equal value stored at first pointer's position
      once we hit different values
        increment pointer #1
        set value at pointer #1 to value at pointer#2  
    if values stored at pointers are different
      increment both pointers and repeat

  APPROXIMATION
*/

const removeDuplicates = function(nums) {

};

console.log(removeDuplicates([1,1,2])) // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // 5
