
// ITERATIVE
const factorial = (n) => {
  let fac = 1;
  while (n > 1) {
    fac *= n;
    n--;
  }
  return fac;
};
console.log(factorial(8)) // 40320

// RECURSIVE
// const factorial = (n) => {
//
// };
console.log(factorial(8)) // 40320
