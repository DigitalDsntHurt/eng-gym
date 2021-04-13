/*

  last item = head
  first item = tail


  push first node
  - set list head = this node
  - set list tail = this node
  - set this node's next = null

  push each subsequent node
  - set this node's next = list head
  - set list head = this node
*/

class LinkedList {
  constructor() {

  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// TEST NODE CLASS


// TEST LINKEDLIST CLASS
// let ll = new LinkedList();





























// class LinkedList {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//       this.length = 0;
//     }
//     // // MY VERSION
//     // push(value) {
//     //   const node = new Node(value);
//     //   if (this.length === 0) {
//     //     this.head = node;
//     //     this.tail = node;
//     //   } else {
//     //     node.next = this.tail;
//     //     this.tail = node;
//     //   }
//     //   this.length++;
//     // }
//
//     // // COLT'S VERSION
//     push(value) {
//       const node = new Node(value);
//       if (!this.head) { // if there is no head
//         this.head = node;
//         this.tail = node;
//       } else {
//         this.tail.next = node;
//         this.tail = node;
//       }
//       this.length++;
//       return this;
//     }
//
//     // // MY VERSION 1
//     // pop() {
//     //   // instantiate var current node = this.tail.next
//     //   // instantiate var prev node = this.tail
//     //   // loop while currentNode !== head
//     //     // currentNode = currentNode.next
//     //     // prevNode = prevNode.next
//     //   // this.head = prevNode
//     //   // this.head.next = null
//     //   // decrement length
//     //   let prevNode = this.tail;
//     //   let currentNode = this.tail.next;
//     //   while (currentNode !== this.head) {
//     //     prevNode = prevNode.next;
//     //     currentNode = currentNode.next;
//     //   }
//     //   this.head = prevNode;
//     //   this.head.next = null;
//     //   this.length--;
//     // }
//
//     // MY VERSION 2
//     pop() {
//       // if there are no nodes in the list return undefined
//       if (!this.head) { return; }
//       // iterate over the list until you reach the tail
//       // set the next property of the 2nd to last node to be meaningfully
//       // set the tail to be the 2nd to last node
//       // decrement the length of the list by 1
//       // return the value of the node removed
//     }
//
//     // COLT'S VERSION
//     pop() {
//       let current = this.head;
//       while (current) {
//         current = current.next;
//       }
//     }
//
//     find(value) {
//
//     }
//
//     contains(value) {
//
//     }
//
//     length() {
//       return this.length;
//     }
// }
//
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// let first = new Node(4);
// console.log(first);

// let list = new LinkedList();
// console.log(list);
// list.push(2);
// // console.log(list); // LinkedList { head: Node{ value: 2, next: null }, tail: Node{ value: 2, next: null }, length: 1 }
// list.push(4);
// list.push(6);
// list.push(8);
// console.log(list);
// console.log(list.length);
// console.log('===')
// list.pop();
// console.log(list);
// console.log(list.tail.next);
// console.log(list.tail.next.next);
// console.log(list.length);
// console.log(list.head) // NODE{ value: 4, next: Node{ value: 2, next: null } }
// console.log(list.tail) // Node{ value: 2, next: null }
