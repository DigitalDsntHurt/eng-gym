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
// C : O(n) constant time

function validAnagram(s1, s2){
  if (s1.length !== s2.length) { return false }

  // create frequencies1 obj
  const f1 = {}
  for (let char of s1) {
    f1[char] = ++f1[char] || 1
  }

  // create frequencies2 obj
  const f2 = {}
  for (let char of s2) {
    f2[char] = ++f2[char] || 1
  }

  if (Object.entries(f1).length !== Object.entries(f2).length) { return false }
  for (let key in f1) {
    if (!(f1[key] === f2[key])) {
      return false;
    }
  }
  return true
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'gramana')) // true
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('bat', 'rat')) // false
console.log(validAnagram('qwerty', 'ytrewq')) // true