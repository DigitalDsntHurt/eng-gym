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

// const sortedSquares = (nums) => {
//   let front = 0;
//   let back = nums.length - 1;
//   while(front <= back) {
//     nums[front] = nums[front] ** 2;
//     nums[back] = nums[back] ** 2;
//     // if (nums[front] > nums[back]) {
//     //   nums.splice(nums[back], 0, nums[front]);
//     //   nums.shift();
//     // }
//     front ++;
//     back --;
//   }
//   return nums;
// };


/*
New Approach

*/
// const sortedSquares = (nums) => {
//   const sortedSquares = [];
//   let leftIdx = 0;
//   let rightIdx = nums.length - 1;
//
//   while (leftIdx <= rightIdx) {
//     let left = nums[leftIdx] ** 2;
//     let right = nums[rightIdx] ** 2;
//     if (left >= right) {
//       sortedSquares.unshift(left);
//       leftIdx++;
//     } else {
//       sortedSquares.unshift(right);
//       rightIdx--;
//     }
//   }
//   return sortedSquares;
// };

const sortedSquares = (nums) => {
  const sortedSquares = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let newLeft = nums[left] ** 2;
    let newRight = nums[right] ** 2;

    if (newLeft >= newRight) {
      sortedSquares.unshift(newLeft);
      left++;
    } else {
      sortedSquares.unshift(newRight);
      right--;
    }
  }
  return sortedSquares;
};

console.log(sortedSquares([-4,-1,0,3,10])) // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])) // [4,9,9,49,121]
