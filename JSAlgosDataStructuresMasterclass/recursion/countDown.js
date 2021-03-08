/*
Write a function that takes in a number n
and prints out all the numbers from n to 1

Write the function two ways
- iteratively
- recursively
*/

// const countDownIterative = (n) => {
//   while (n > 0) {
//     console.log(n);
//     n--;
//   }
// };
// countDownIterative(8);

const countDownRecursive = (n) => {
  if (n === 0) { return }
  console.log(n)
  countDownRecursive(n - 1);
};
countDownRecursive(8);
