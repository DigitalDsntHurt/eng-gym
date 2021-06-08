// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let back = linkedList;
	let front = back.next;
	while (front !== null) {
		if (back.value === front.value) {
			while (back.value === front.value) {
				front = front.next
			}
			if (front.next === null) {
					back.next = null;
					break;
				} else {
					back.next = front;
					back = front;
					front = front.next;
				}
		} else {
			back = back.next;
			front = front.next;
		}
	}
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
