// write a function called same
// that accepts two arrays and
// returns true if every value in the first array has its corresponding value squared in the second array ... the frequency of values must be the same

// Write a nested loop solution without using indexof
// INCOMPLETE
// const same = (arr1, arr2) => {
//   for (let num of arr1) {
//     const square = num ** 2
//     const squareIndex = -1
//     for (let num2 of arr2) {
//       if (square === num2) {
//         squareIndex = num2
//         break;
//       }
//       num2.
//     }
//   }

// // Write a nested loop solution
// const same = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) { return false }
//   for (let num of arr1) {
//     const square = num ** 2
//     if (arr2.indexOf(square) === -1) {
//       return false;
//     }
//     arr2.splice(arr2.indexOf(square), 1)
//   }

//   return true;
// }


// Write a counter pattern solution
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) { return false }

  const arr1counts  = {}
  for (let num of arr1) {
    arr1counts[num] = ++arr1counts[num] || 1
  }

  const arr2counts  = {}
  for (let num of arr2) {
    arr2counts[num] = ++arr2counts[num] || 1
  }

  for (let key in arr1counts) {
    if (arr1counts[key] !== arr2counts[key**2]) { return false }
  }

  return true;
}


console.log(same([1,2,3], [4, 1, 9])) // true
console.log(same([1,2,3], [1, 9])) // false
console.log(same([1,2,1], [4, 4, 1])) // false