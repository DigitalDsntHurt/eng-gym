/*
  FROM : https://leetcode.com/problems/implement-strstr/

  Return the index of the first occurrence of needle in haystack,
  or -1 if needle is not part of haystack.

  I : string (haystack), string (needle)
  O : number index
  E : input haystack is empty string ~> return -1
  C : o(n) linear time

  STRATEGY
  the key to linear time is not using nested loops
  we're going to use two pointers
  we'll instantiate them both to 0
  we'll use a loop to iterate over each item in haystack (pointer 1 will always point to current item)

  iterate over each char in haystack
  - if


  APPROXIMATION
  instantiate start var to 0
  instantiate end var to 0
  instantiate needlePointer var to 0
  instantiate matchLength var to 0

  // loop while matchLength is less than needle.length ==> WRONG CONDITION
  while end < haystack.length
    if haystack value at end index EQUALS needle value at needlePointer index
      increment matchLength
      if matchLength equals needle.length RETURN start
      increment end
      increment needlePointer
    if haystack value at end index DOES NOT EQUALS needle value at needlePointer index
      matchLength = 0
      needlePointer = 0
      increment end
      set start = end

  and if we get to the end of the loop, return -1
*/

const strStr = (haystack, needle) => {

};

console.log(strStr('hello', 'll')) // 2
console.log(strStr('aaaaa', 'bba')) // -1
