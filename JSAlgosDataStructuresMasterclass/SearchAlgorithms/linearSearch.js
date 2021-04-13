// FOR LOOP
const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) { return i; }
  }
  return -1;
}

// // FOR OF LOOP
// const linearSearch = (array, target) => {
//   let i = 0;
//   for (let item of array) {
//     if (item === target) { return i; }
//     i++;
//   }
//   return -1;
// }

// // FOR EACH LOOP
// const linearSearch = (array, target) => {
//   let targetIdx = -1;
//   array.forEach((item, index) => {
//     if (item === target) { targetIdx = index }
//   })
//   return targetIdx;
// }

// // EVERY LOOP
// const linearSearch = (array, target) => {
//
// };

console.log(linearSearch([10,15,20,25,30], 15))
