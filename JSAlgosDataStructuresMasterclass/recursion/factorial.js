
// // ITERATIVE
// const factorial = (n) => {
//   let fac = 1;
//   while (n > 1) {
//     fac *= n;
//     n--;
//   }
//   return fac;
// };
// console.log(factorial(8)) // 40320

// RECURSIVE
const factorial = (n) => {
  if (n === 1) return n;
  return n * factorial(n - 1);
};
console.log(factorial(8)) // 40320
