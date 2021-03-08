/*
FROM : https://leetcode.com/problems/squares-of-a-sorted-array/

Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number sorted in non-decreasing order.

I : array
O : array

STRATEGY

*/

// const sortedSquares = (nums) => {
//   let front = 0;
//   let back = nums.length - 1;
//   while(front < back) {
//     nums[front] = nums[front] * nums[front];
//     nums[back] = nums[back] * nums[back];
//     // console.log(nums)
//     if (nums[front] > nums[back]) {
//       nums.splice(back, 0, nums[front])
//       nums.shift()
//       front++;
//       back--;
//     } else if (nums[front] < nums[back] && nums[front] > nums[back - 1]) {
//       nums.splice(back - 1, 0, nums[front])
//       nums.shift()
//       front++;
//       back--;
//     } else {
//       front++;
//       back--;
//     }
//   }
//   return nums;
// };

const sortedSquares = (nums) => {
  let front = 0;
  let back = nums.length - 1;
  while(front <= back) {
    nums[front] = nums[front] ** 2;
    nums[back] = nums[back] ** 2;
    // if (nums[front] > nums[back]) {
    //   nums.splice(nums[back], 0, nums[front]);
    //   nums.shift();
    // }
    front ++;
    back --;
  }
  return nums;
};

console.log(sortedSquares([-4,-1,0,3,10])) // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])) // [4,9,9,49,121]
