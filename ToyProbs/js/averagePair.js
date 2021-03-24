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


ABOVE IS HYPOTHESIZED APPROXIMATION
BELOW IS REVISED APPROXIMATION, WRITTEN AFTER SUCCESSFUL IMPLEMENTATION

STRATEGY
use two pointers, one starting at index 0 one starting at index -1
until pointers meet/cross
calculate average of values at each pointer
  if avg = target average return true
  if avg < target avg increment smaller / first pointer
  if avg > target avg decrement larger / last pointer
if you get to the end (= if pointers meet) without returning true return false

APPROXIMATION
*/

// const averagePair = (arr, targetAvg) => {
//   let front = 0;
//   let back = arr.length - 1;
//
//   while (front < back) {
//     const avg = (arr[front] + arr[back]) / 2;
//     if (avg === targetAvg) { return true; }
//     if (avg < targetAvg) { front++; }
//     if (avg > targetAvg) { back--; }
//   }
//   return false;
// };


const averagePair = (arr, targetAvg) => {
  let front = 0;
  let back = arr.length - 1;

  while (front < back) {
    const avg = (arr[front] + arr[back]) / 2;
    if (avg === targetAvg) {
      return true;
    }
    if (avg < targetAvg) {
      front++;
    }
    if (avg > targetAvg) {
      back--;
    }
  }
  return false;
}
console.log(averagePair([1,2,3], 2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([], 4)) // false
