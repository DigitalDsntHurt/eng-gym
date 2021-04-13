// loop over the longer string
// loop over the shorter string
// if the chars dont match break out of the inner loop
// in the chars do match keep going
// return count

// const stringSearch = (string, substring) => {
//   let matches = 0;
//   // for (char of string) {
//   //   for (subchar of substring) {
//   //     if (char !== subchar) { break; }
//   //   }
//   // }
//   for (let i = 0; i < string.length; i++) {
//     // let char = string[i];
//     for (let j = 0; j < substring.length; j++) {
//       // console.log(string[i], string[j])
//       // let subchar = substring[j];
//       if (string[i] !== substring[j]) {
//
//         // break;
//       }
//       if (j === substring.length - 1) {
//         console.log(j, substring.length - 1)
//         // console.log(string[i], string[j])
//         matches++;
//       }
//     }
//   }
//   return matches;
// };

const stringSearch = (long, short) => {
  let matches = 0;
  for (let i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (long[i+j] !== short[j]) { break; }
      if (j === short.length - 1) { matches++; }
    }
  }
  return matches;
};

console.log(stringSearch('oompaloompa', 'loom')) // 1
console.log(stringSearch('oompaloompa', 'oo')) // 2
console.log(stringSearch('oompaloompa', 'mpa')) // 2
console.log(stringSearch('oompaloompa', 'zz')) // 0
