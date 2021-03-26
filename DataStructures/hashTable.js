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
    let hash = this._hash(key);
    if (!this.keyMap[hash]) {
      this.keyMap[hash] = [];
    }
    this.keyMap[hash].push([key, value]);
  }

// GET
  get(key) {
    // hash the key, get index
    // look in the hash table for that index
      // if nothing exists there, return undefined
      // if something exists there retrieve the key-value pair from the hash table and return it

      let hash = this._hash(key);
      let bucket = this.keyMap[hash];
      if (bucket) {
        for (let pair of bucket) {
          if (pair[0] === key) { return pair[1]; }
        }
      }
      return;
  }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
console.log(JSON.stringify(ht))
console.log(ht.get('salmon')) // #FA8072
console.log(ht.get('lightcoral')) // #F08080
console.log(ht.get('maroon')) // #800000
console.log(ht.get('yellow')) // #FFFF00
