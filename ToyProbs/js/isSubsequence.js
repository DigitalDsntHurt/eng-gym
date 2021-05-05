//
//// LEETCODE
//
// Given two strings s and t, check if s is a subsequence of t.
// A subsequence of a string is a new string that is formed from the
// original string by deleting some (can be none) of the characters without
// disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

var isSubsequence = function(s, t) {
    let sPoint = 0;
    let tPoint = 0;
    while (sPoint < s.length && tPoint < t.length) {
        if (s[sPoint] === t[tPoint]) {
            sPoint++;
        }
        tPoint++;
    }
    return sPoint === s.length;
};

/*
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11351742#overview
take in two strings and determine whether or not the characters in the first occur in the second.
order matters but adjacency does not.

I : two strings
O : boolean
E : n/a (no inputs provided, one input provided, more than 2 inputs provided, one or more non-strings provided, one or more empty strings provided)
C : n/a

STRATEGY
  for each character in second string
    if current char equals first char in first string
      instantiate a pointer pointing to the next char in the first string
      iterate over each char in the first string


*/

const isSubsequnce = (str1, str2) => {

}

console.log(isSubsequnce('hello', 'hello world')); // true
console.log(isSubsequnce('hello', 'oh hello world')); // true
console.log(isSubsequnce('sing', 'sting')); // true
console.log(isSubsequnce('abc', 'abracadabra')); // true
console.log(isSubsequnce('abc', 'acb')); // false
