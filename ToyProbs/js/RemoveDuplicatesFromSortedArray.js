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
  initiate front var to 0
  initiate back var to 0

  initiate while loop that ends when back pointer >= arr.length
    if values at front and back are equal
      increment back
    if values at front and back are not equal
      increment front
      change value at front to value at back
      increment back
  return front + 1
*/

const removeDuplicates = function(nums) {
  let front = 0;
  let back = 1;

  while (back < nums.length) {
    if (nums[front] === nums[back]) {
      back++;
    } else {
      front++;
      nums[front] = nums[back];
      back++
    }
  }

  return front + 1;
};

console.log(removeDuplicates([1,1,2])) // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // 5
