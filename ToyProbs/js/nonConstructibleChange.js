// sort the input array
// initialize a changeSum variable to 0
// for each item in the input array
  // if current item > changeSum + 1
    // return changeSum + 1
  // else changeSum += current item
// if we get to the end of the loop return changeSum + 1

const nonConstructibleChange = coins => {
  coins = coins.sort((a, b) => ( a - b ))
  let changeSum = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > changeSum + 1) { return changeSum + 1; }
    changeSum += coins[i];
  }
  return changeSum + 1;
};

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])); // 20
console.log(nonConstructibleChange([1, 1, 1, 1, 1])); // 6
