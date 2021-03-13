class LinkedList {
    constructor(value) {
      let newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
    }

    addToHead(value) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }

    removeFromTail() {

    }

    find() {

    }

    contains() {

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

let list = new LinkedList(2);
console.log(list);
list.addToHead(4);
console.log(list); // LinkedList { head: NODE{ value: 4, next: Node{ value: 2, next: null } }, tail: next: Node{ value: 2, next: null }}
console.log(list.head) // NODE{ value: 4, next: Node{ value: 2, next: null } }
console.log(list.tail) // Node{ value: 2, next: null }
list.addToHead(6);
list.addToHead(8);
console.log(list.head) // NODE{ value: 8, next: Node{ value: 6, next: null } }
console.log(list.tail) // Node{ value: 2, next: null }
console.log(list.head.next.next) // Node{ value: 4, next: Node{ value: 2, next: null }}
