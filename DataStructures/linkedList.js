class LinkedList {
    constructor(value) {
      let newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }

    addToHead(value) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }

    removeFromTail() {
      // start at head
      // iterate over each node
        // if currentNode.next = tail
          // set tail to currentNode
          // set currentNode.next to null
      this.length--;
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
console.log(list.head.next.next.next) // Node{ value: 2, next: null }
console.log(list.tail) // Node{ value: 2, next: null }
list.removeFromTail();
console.log(list.tail) // Node{ value: 4, next: null }
console.log(list.head.next.next) // Node{ value: 4, next: null }
