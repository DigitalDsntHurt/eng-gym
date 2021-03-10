/*

*/

const power = (base, exp) => {
  if (base === 0) { return 0; }
  if (exp === 0) { return 1; }
  return base * power(base, exp - 1);
};

console.log(power(0, 2)); // 0
console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
