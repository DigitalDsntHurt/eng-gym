/*
 - what is a hash table

 - what is a hashing algorithm

 - what makes a good hashing algorithm

 - how collisions occur in a hash table

 - handle collisions using separate chaining or linear probing

 // BASIC HASHTABLE class
 https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344862#content

 // SET
 - accepts a key and a value
 - hashes the key
 - stores the k/v pair in the hash table via separate chaining

 // GET
 - accepts a key
 - hashes the key
 - retrieves the key value pair from the hashTable
 - if the key isn't found return undefined
*/

class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // SET
  set(key, value) {
    let hash = _hash(key);
    this.keyMap[hash] = this.keyMap[hash].push([key, value]) || [[key, value]];
  }
}
