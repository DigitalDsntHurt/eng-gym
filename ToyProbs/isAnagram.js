/**
 * given two strings
 * determine is thte second string is an anagram of the first
 */

// I : 2 strings
// O : bool
// E :
// - empty input strings
// - single input
// - no inputs

function validAnagram(s1, s2){
  // add whatever parameters you deem necessary - good luck!
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'gramana')) // true
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('bat', 'rat')) // false
console.log(validAnagram('qwerty', 'trewq')) // true