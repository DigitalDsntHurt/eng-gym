/*
  FROM : https://leetcode.com/problems/linked-list-cycle/

  Given head, the head of a linked list, determine if the linked list
  has a cycle in it.
  There is a cycle in a linked list if there is some node in the list
  that can be reached again by continuously following the next pointer.
  Internally, pos is used to denote the index of the node that tail's next
  pointer is connected to. Note that pos is not passed as a parameter.
  Return true if there is a cycle in the linked list. Otherwise, return false.

  I : head of a linked list ... in our case his is likely an array
  O : boolean ... says whether or not the list is cyclical
  E :
   - no arg provided
   - arg not an array
  C : n/a

  STRATEGY ~ add a property
  write a recursive function that takes in a node
    if node.next doesn't exist return false
    if node.seen return true
    set a new property on node ~ .seen = true
    return recursive call with head.next

*/

const hasCycle = (head) => {
  if (!head || head.length === 0) { return false; }
  const traverse = (node) => {
    if (!node.next) { return false; }
    if (node.seen) { return true; }
    node.seen = true;
    return traverse(node.next);
  }
  return traverse(head)
};
//
// console.log(hasCycle([3,2,0,-4])) // true
// console.log(hasCycle([1,2])) // true
// console.log(hasCycle([1])) // false
