/*
the athletic technical interview
*/

/*
Your previous Plain Text content is preserved below:

Finding the missing number in the array.
Input: [4, 5, 1, 2, 6]
Output: 3
 */

// SORT VERSION
// O(NlogN) time
// O(1) space
// const missingNumber = (arr) => {
//   arr.sort((a,b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i = i] !== arr[i] + 1) { return arr[i] + 1; }
//   }
// };

// HASH TABLE VERSION

const missingNumber = (arr) => {
 let ref = new Array().fill(-1);
 for (let i = 0; i < arr.length; i++) {
   ref[i] = arr[i];
 }
 return ref.filter(x => x === -1);
};

console.log(missingNumber([4, 5, 1, 2, 6]))//3
/*
WHAT I ACTUALLY WROTE IN THE INTERVIEW

I - array
O - number

const missingNum = (arr) => {
  arr.sort((a,b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i] + 1;
    }
  }
};
console.log(missingNum([4, 5, "asdf1", 2, 6]));


// iterate over input arr
  // write property = index
  // write val = num

//
*/
