const findKthLargestElement = (arr, k) => {
  return arr.sort().reverse()[k-1]
};

console.log(findKthLargestElement([3,2,1,5,6,4], 2)) // 5
console.log(findKthLargestElement([3,2,3,1,2,4,5,5,6], 4)) // 4
