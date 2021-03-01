/**
 * write a function that given two positive integers
 * determines whether or not the two numbers have the same frequency of digits
 *
 * I : 2 numbers
 * O : boolean
 * E : no nums provided, 1 num provided, non-number(s) provided, single digit number
 * C : O(n) linear time
 *
 * STRATEGY
 *
 * APPROXIMATION
 * stringify number 1
 * stringify number 2
 * if num1 does not have same length as num 2 return false
 *
 * for each char in string 1
 *   if char exists in counter obj 1 increment its value
 *   if char does not exist in counter obj 1 add it as a key and initialize val 1
 *
 * repeat steps above for number 2 ~> build counter obj 2
 *
 * if counter objs do not have same length return false
 *
 * for each item in counter obj 1
 *   if item does not exist in obj 2 return false
 *
 * otherwise return true at bottom
 *
 */



const sameFrequency = (num1, num2) => {
  const num1chars = String(num1).split('');
  const num2chars = String(num2).split('');
  if (num1chars.length !== num2chars.length) { return false; }

  const num1charCount = {};
  const num2charCount = {};

  num1chars.forEach(char => num1charCount[char] = ++ num1charCount[char] || 1);
  num2chars.forEach(char => num2charCount[char] = ++ num2charCount[char] || 1);

  if (Object.entries(num1charCount).length !== Object.entries(num2charCount).length) { return false; }

  for (let digit in num1charCount) {
    if (num2charCount[digit] !== num1charCount[digit]) { return false; }
  }

  return true;
};

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false