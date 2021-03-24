/*
  FROM : https://leetcode.com/problems/missing-number/

  Given an array nums containing n distinct numbers in the range [0, n],
  return the only number in the range that is missing from the array.

  Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

  I : array (of numbers, unique, contiguous)
  O : number
  E : no inputs, input not array, input array contains not numbers, input array contains not distinct, contiguous numbers
  C :
  - o(n) time
  - o(1) space

  Brute Force
  sort input array
  check : is first element 0
    if yes great, if no, return 0
  check : is last element n
    if yes great, if no, return n
  iterate over input array, checking for non-consecutive values
  when you find two non-consecutive values return the value between them
  ==>> o(1) space
  ==>> o(2n)

*/

// // DOES NOT WORK
// const missingNumber = function(nums) {
//   nums.sort();
//   if (nums[0] !== 0) return 0;
//   if (nums[nums.length - 1] !== nums.length) return nums.length;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i + 1] - nums[i] !== 1) { return nums[i] + 1 }
//   }
// };


const missingNumber = function(nums) {
  const tmp = Array(nums.length + 1).fill(-1);
  for (let num of nums) {
    tmp[num] = num;
  }
  return tmp.indexOf(-1);
};

console.log(missingNumber([3,0,1])) // 2
console.log(missingNumber([0,1])) // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])) // 8
console.log(missingNumber([0])) // 1


/*
worth checking out these solutions
- https://leetcode.com/problems/missing-number/discuss/388832/Javascript-easy-one
- https://leetcode.com/problems/missing-number/discuss/255115/90-faster-Javascript
- https://leetcode.com/problems/missing-number/discuss/480793/Javascript-Simple-solution-faster-than-99.08-submissions
*/
