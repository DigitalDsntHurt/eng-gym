/*
I : binary tree
O : number = sum of all nodes' depths
E :
C :

STRATEGY
initialize nodeDepthsSum var = 0
initialize a currentDepth var = 0 // might not even need this

write recursive function that accepts a node and a current depth
  if there is no node
	  return
	if there is a node
	  add currentDepth to nodeDepthsSum
		invoke recursive function with node.left and currentDepth + 1
		invoke recursive function with node.right and currentDepth + 1

invoke recursive function with root node and 0
return nodeDepthsSum
*/

function nodeDepths(root) {
  let nodeDepthsSum = 0;

	const nodeDepth = (node, currentDepth = 0) => {
		if (!node) { return; }
		nodeDepthsSum += currentDepth;
		nodeDepth(node.left, currentDepth + 1);
		nodeDepth(node.right, currentDepth + 1);
	}

	nodeDepth(root)
	return nodeDepthsSum;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
