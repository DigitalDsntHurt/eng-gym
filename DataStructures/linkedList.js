class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(value) {
      const node = new Node(value);
      if (this.length === 0) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.tail;
        this.tail = node;
      }
      this.length++;
    }

    pop() {

    }

    find(value) {

    }

    contains(value) {

    }

    length() {
      return this.length;
    }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// let first = new Node(4);
// console.log(first);

let list = new LinkedList();
console.log(list);
list.push(2);
// console.log(list); // LinkedList { head: Node{ value: 2, next: null }, tail: Node{ value: 2, next: null }, length: 1 }
list.push(4);
console.log(list); // LinkedList { head: Node{ value: 4, next: Node{ value: 2, next: null } }, tail: next: Node{ value: 2, next: null }}
// console.log(list.head) // NODE{ value: 4, next: Node{ value: 2, next: null } }
// console.log(list.tail) // Node{ value: 2, next: null }
