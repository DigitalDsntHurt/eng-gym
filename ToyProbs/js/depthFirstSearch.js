/*
I : empty array
O : array of node names in dfs order
E :
C :

STRATEGY
	initialize a nodes var to an empty array
	write recursive function
	call recursive function
	return nodes array

	recursive function
		add node.name to nodes arr
		if node.children is empty
		  return
		else
			iterate over each item in node.children
				make recursive call
*/

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // PURE RECURSIVE PATTERN
  depthFirstSearch(array) {
    array.push(this.name);
    for (let child of this.children) {
      child.depthFirstSearch(array)
    }
    return array;
  }
  // RECURSIVE HELPER PATTERN
  depthFirstSearch(array) {
		const populateNodesArray = (node) => {
			array.push(node.name);
			if (node.children.length > 0) {
				node.children.forEach(node => {
					populateNodesArray(node);
				})
			} else {
				return;
			}
		}
		populateNodesArray(this);
		return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
