/*
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11351742#overview
take in two strings and determine whether or not the characters in the first occur in the second.
order matters but adjacency does not.

I : two strings
O : boolean
E : n/a (no inputs provided, one input provided, more than 2 inputs provided, one or more non-strings provided, one or more empty strings provided)
C : n/a

STRATEGY


*/

const isSubsequnce = (str1, str2) => {

}

console.log(isSubsequnce('hello', 'hello world')); // true
console.log(isSubsequnce('sing', 'sting')); // true
console.log(isSubsequnce('abc', 'abracadabra')); // true
console.log(isSubsequnce('abc', 'acb')); // false
