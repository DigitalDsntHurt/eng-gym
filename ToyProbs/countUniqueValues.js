// write a function that accepts a sorted array
// and counts the unqique values in the array

/**
 * I : sorted arr
 * O : number of unique values
 * E :
 * - no inputs
 * - non-array inputs
 * - empty array input
 * - non-numberic array values
 * C : linear time
 *
 * STRATEGY #1
 * - iterate over array items to build freq counts obj
 * - count and return number of entries in freq counts obj
 *
 * STRATEGY #2
 * - setup count variable initialized to 0
 * - setup currentPointer at first index
 * - if value at currentPointer exists
 *   - increment count
 * - setup a nextPointer at next index
 * - if value at nextPointer !== value at currentPointer
 *   - increment count
 *   - move current pointer to nextPointer + 1
 * - if value at nextPointer === value at currentPointer
 *   - move nextPointer to nextPointer + 1
 */

// const countUniqueValues = (arr) => {
//   if (arr.length === 0) { return 0 }
//   if (arr.length === 1) { return 1 }

//   let count = 1;

//   let currentPointer = 0;
//   let nextPointer = 1;
//   let currentValue = arr[currentPointer];
//   let nextValue = arr[nextPointer];

//   // console.log(currentPointer)
//   // console.log(nextPointer)


//   while (nextValue !== undefined) {

//     console.log(currentValue)
//     console.log(nextValue)

//     if (currentValue === nextValue) {
//       nextPointer++;
//     } else {
//       count++;
//       currentPointer = nextPointer;
//       nextPointer = currentPointer + 1;
//     }
//   }
//   return count
// }

const countUniqueValues = (arr) => {
  if (arr.length === 0) { return 0 }
  if (arr.length === 1) { return 1 }

  let pointer = 0;
  let scout = 1;

  while (scout < arr.length) {
    if (arr[pointer] === arr[scout]) {
      scout++
    } else {
      pointer++
      arr[pointer] = arr[scout]
      scout++
    }
  }

  return pointer + 1;
}

console.log(countUniqueValues([1,1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4