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

/* SECOND INTERVIEW 6/16*/

const _ = require('lodash');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);

/*************************************************************

The "ultimate digit" of an integer x is defined by the following rules:

  - If x has only 1 digit, then its ultimate digit is x.
  - Otherwise, the ultimate digit of x is equal to the ultimate digit of the "digit-sum" of x. Here, "digit-sum" of a number is defined as the sum of its digits.

For example, ultimate digit of 8759 will be calculated as:

  ultimate-digit(8759) = ultimate-digit(8+7+5+9)
                       = ultimate-digit(29)
                       = ultimate-digit(2+9)
                       = ultimate-digit(11)
                       = ultimate-digit(1+1)
                       = ultimate-digit(2)
                       = 2.

You are given two numbers: n and k. You have to calculate the ultimate digit of x.

x is created when number n is concatenated k times. That is, if n = 234 and k = 3, then x = 234234234.


def ultimate_digit(n, k)

end


print ultimate_digit(234, 3)

I
- n = inteneger
- k = integer

O = integer

concatenate n to n k times

ultimate digit
  split input into separate single digits
  sum all those digits
  call cultimate digit recursively on sum
  -> base case where sum = single digit
**************************************************************/


const ultimate_digit = (n) => {
  // return String(n).length;
  if (String(n).length === 1) { return n }
  let digits = String(n).split('').map(n => (Number(n)));
    // .reduce((acc, num) => { return acc + n; }, 0);
  let sum = 0;
  for (let num of digits) {
    sum += num
  };
  if (String(sum).length === 1) { return sum; }
  return ultimate_digit(sum);
};

const ultimate_digit_times = (n, k) => {
  let concatenatedNum = '';
  for (let i = 0; i < k; i++) {
    concatenatedNum += String(n);
  }

  return ultimate_digit(Number(concatenatedNum));
};

console.log(ultimate_digit(8)); // 8
console.log(ultimate_digit(12)); // 3
console.log(ultimate_digit(8759)); // 2

console.log(ultimate_digit_times(8, 1)) // 8
console.log(ultimate_digit_times(12, 1)) // 3
console.log(ultimate_digit_times(8759, 1)) // 2

console.log(ultimate_digit_times(8, 2)) // 7
console.log(ultimate_digit_times(234, 30000000)) // 9
// console.log(ultimate_digit_times(8759, 1)) // 2
