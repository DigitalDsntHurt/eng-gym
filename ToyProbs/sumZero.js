// Write a functions that takes in an array of integers
// and returns the first pair whose sum is zero

// // WORKS
// const sumZero = (arr) => {
//   let frontPointer = 0;
//   let backPointer = arr.length - 1;

//   while (frontPointer < backPointer) {
//     let frontPointed = arr[frontPointer];
//     let backPointed = arr[backPointer];

//     if (frontPointed + backPointed === 0) {
//       return [arr[frontPointer], arr[backPointer]];
//     }
//     if (frontPointed + backPointed > 0) {
//       backPointer -= 1;
//     }
//     if (frontPointed + backPointed < 0) {
//       frontPointer += 1;
//     }
//   }
// }

// WORKS
const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right -= 1;
    }
    if (sum < 0) {
      left += 1;
    }
  }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,5])) // [-2,2]
console.log(sumZero([-4,-3,-2,5])) // undefined
