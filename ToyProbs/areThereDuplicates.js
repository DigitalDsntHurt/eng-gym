/**
 * write a function that accepts an number of arguments
 * check whether there are any duplicates among the arguments passed in
 *
 * I : anything
 * O : boolean
 * E : no args passed in, 1 arg passed in, args of different types(?)
 * C : O(n) linear time
 *
 * STRATEGY
 *
 * APPROXIMATION (freq counter pattern)
 * create an array with all passed arguments
 * initialize an empty arguments count obj
 * for each array item
 *   if item exists as key in count obj
 *     increment value OR early return false
 *   else
 *     create property with value = 1
 *
 * if any obj value > 1 return false
 * else return true
 *
 * APPROXIMATION (multiple pointers pattern)
 * create an array with all passed arguments
 * sort array of arguments
 * initialize forPointer = 0
 * initialize backPointer = 1
 * while both pointers point to extant values
 * if value at forPointer === value at backPointer
 *   return true
 * else
 *   set smaller pointer to larger pointer + 1
 */

// FREQUENCY COUNTER PATTERN
// const areThereDuplicates = (...args) => {
//   const argumentCounts = {};
//   for (let arg of args) {
//     if (argumentCounts[arg]) {
//       return true;
//     } else {
//       argumentCounts[arg] = 1;
//     }
//   }
//   return false;
// };

// // MULTIPLE POINTERS PATTERN
// const areThereDuplicates = (...rest) => {
//   rest = rest.sort();
//   let pointer1 = 0;
//   let pointer2 = 1;
//
//   while (pointer1 < rest.length && pointer2 < rest.length) {
//     if (rest[pointer1] === rest[pointer2]) {
//       return true;
//     } else {
//       if (pointer1 < pointer2) {
//         pointer1 = pointer2 + 1;
//       } else {
//         pointer2 = pointer1 + 1;
//       }
//     }
//   }
//   return false;
// };

// MULTIPLE POINTERS PATTERN -- CLEANER
// const areThereDuplicates = (...args) => {
//   args = args.sort();
//   let first = 0;
//   let next = 1;
//
//   while (next < args.length) {
//     if (args[first] === args[next]) { return true; }
//     first++;
//     next++;
//   }
//   return false;
// };

// MULTIPLE POINTERS PATTERN -- ONE LINER WITH SET
const areThereDuplicates = (...args) => {
  return new Set(args).size !== args.length;
}
console.log(areThereDuplicates(1,2,3)) // false
console.log(areThereDuplicates(1,2,2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
