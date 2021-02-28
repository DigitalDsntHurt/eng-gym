/**
 * I : ordered array, num
 * O : index where number appears in array
 *
 * Strategy
 * - set a midpoint of the array
 * - if num is greter than midpoint
 *  - throw away all values below and including midpoint
 *  - recurse until midpoint = num or array.length = 1 and num != midpoint
 * * - if num is less than midpoint
 *  - throw away all values above and including midpoint
 *  - recurse until midpoint = num or array.length = 1 and num != midpoint
 *
 * QUESTION...
 * how to keep track of index
 */

const binarySearch = (arr, val) => {
  let arrStart = 0;
  let arrEnd = arr.length - 1;
  let midpoint = Math.floor(arr.length / 2);
  let midpointValue = arr[midpoint];
  let subArray = arr;

  if (val === midpointValue) {
    return midpoint;
  }
  if (val > midpointValue) {
    subArray = arr.slice(midpoint + 1, arrEnd + 1)
  }
  if (val < midpointValue) {
    subArray = arr.slice(0, midpoint)
  }
};

console.log(binarySearch([1,3,5,7,9,11,13,15,17,19,101], 17)) // 8
console.log(binarySearch([1,3,5,7,9,11,13,15,17,19,101], 101)) // 10
console.log(binarySearch([1,3,5,7,9,11,13,15,17,19,101], 9)) // 4
console.log(binarySearch([1,3,5,7,9,11,13,15,17,19,101], 1)) // 0
console.log(binarySearch([1,3,5,7,9,11,13,15,17,19,101], 8)) // -1