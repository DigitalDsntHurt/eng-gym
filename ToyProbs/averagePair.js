/*
given a sorted array of integers and a target average
determine if there is a pair of valyues in the input array
where the average of the pair equals the target average.

I :
- sorted array of integers (array)
- target average (number)

O : boolean

E :
- single argument
- first arg not array
- first arg contains not integers
- second arg not number

C :
- O(n) linear
- O(1) constant space

STRATEGY

APPROXIMATE
initialize first pointer @ idx 0
initialize next pointer @ idx 1

write helper to calculate avg of 2 numbers

while next pointer is less than length of input array
  calculate avs of values at both pointers
  if values average to target average
    return true
  else
    increment first
    increment next

if you get to the end, return false
*/

const averagePair = (arr, targetAvg) => {
  let first = 0;
  let next = 1;

  while (next < arr.length) {
    if ((arr[first] + arr[next]) / 2 === targetAvg) { return true; }
    first ++;
    next ++;
  }

  return false;
};

console.log(averagePair([1,2,3], 2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([], 4)) // false
