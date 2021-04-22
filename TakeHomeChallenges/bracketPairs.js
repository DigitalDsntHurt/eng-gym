/*
In the language you're most comfortable with, write a function that
takes a string and returns a boolean. The function makes sure that
pairs of brackets are matching and properly nested:
- every "{" should be closed by a corresponding "}",
- every "[" closed by a "]",
- every left parenthesis by a right parenthesis;

it returns true if all are matched,
false if there is a mismatch.

In addition, the bar character "|" closes itself (like Ruby's iteration variable for a block).

Note that a string like "{ [ } ]" should return false.

I : string
O : boolean
E : empty string, non-string, string of len 1
C : n/a

THOUGHTS
- there are three types of bracket: ( { [
- there need to be an even number of each bracket type
- a bracket opened WITHIN any other needs to be closed within its parent

STRATEGY
- remove all characters that aren't brackets
- use two pointers strategy starting at first and last character
- - if front pointer and back pointer point to different bracket types
- - - - early return false
- - else
- - - - increment front pointer and decrement back pointer

*/
const hasValidBrackets = (string) => {
 // const brackets = '(){}[]';
 const regexp = new RegExp(/{|}|\[|\]|\(|\)/, 'g')
 // return regexp.test(string);
 if (typeof string !== 'string' || string === undefined) { return null; }
 if (string.length === 0 || !regexp.test(string)) { return true; }

 let justTheBrackets = '';
 for (let char of string) {
   if (regexp.test(char)) { justTheBrackets += char; }
 }

 return justTheBrackets;
 //
 // let front = 0;
 // let back = string.length - 1;
};

// test not string returns null
console.log(hasValidBrackets(99)) // null
// test no argument returns null
console.log(hasValidBrackets()) // null
// test empty string return true
console.log(hasValidBrackets('')) // true
// test no brackets returns true
console.log(hasValidBrackets('hello moto')) // true
// test only brackets remain
// console.log(hasValidBrackets('hello {moto'))
// console.log(hasValidBrackets('hello moto}'))
// console.log(hasValidBrackets('hello [moto'))
/*



test bracket skinner
*/
