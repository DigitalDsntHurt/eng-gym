// initialize closestTo variable = null;

// if closestTo variable = null
 // closestTo = tree.value;

// if tree.value = target
  // return tree.value
// if Math.abs(tree.value - target) < Math.abs(closestTo - target)
  // set closestTo to tree.value

///////////////////////////////
// initialize closest variable to infinity
// compare absolute value of target - currentValue to abs val of target - closest
// if difference between current value and target is less than difference between closest and current
	// update closest to current
// if closest = target
  // return closest
// if target > current value
  // go to next node on right
// if target < current value
  // go to next node on right

function findClosestValueInBst(tree, target) {
  // Write your code here.
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// TEST CASES
// {
//   "tree": {
//     "nodes": [
//       {"id": "10", "left": "5", "right": "15", "value": 10},
//       {"id": "15", "left": "13", "right": "22", "value": 15},
//       {"id": "22", "left": null, "right": null, "value": 22},
//       {"id": "13", "left": null, "right": "14", "value": 13},
//       {"id": "14", "left": null, "right": null, "value": 14},
//       {"id": "5", "left": "2", "right": "5-2", "value": 5},
//       {"id": "5-2", "left": null, "right": null, "value": 5},
//       {"id": "2", "left": "1", "right": null, "value": 2},
//       {"id": "1", "left": null, "right": null, "value": 1}
//     ],
//     "root": "10"
//   },
//   "target": 12
// }
const tree = {
  "nodes": [
    {"id": "10", "left": "5", "right": "15", "value": 10},
    {"id": "15", "left": "13", "right": "22", "value": 15},
    {"id": "22", "left": null, "right": null, "value": 22},
    {"id": "13", "left": null, "right": "14", "value": 13},
    {"id": "14", "left": null, "right": null, "value": 14},
    {"id": "5", "left": "2", "right": "5-2", "value": 5},
    {"id": "5-2", "left": null, "right": null, "value": 5},
    {"id": "2", "left": "1", "right": null, "value": 2},
    {"id": "1", "left": null, "right": null, "value": 1}
  ],
  "root": "10"
}

console.log(findClosestValueInBst(tree, 12))
//
// {
//   "tree": {
//     "nodes": [
//       {"id": "100", "left": "5", "right": "502", "value": 100},
//       {"id": "502", "left": "204", "right": "55000", "value": 502},
//       {"id": "55000", "left": "1001", "right": null, "value": 55000},
//       {"id": "1001", "left": null, "right": "4500", "value": 1001},
//       {"id": "4500", "left": null, "right": null, "value": 4500},
//       {"id": "204", "left": "203", "right": "205", "value": 204},
//       {"id": "205", "left": null, "right": "207", "value": 205},
//       {"id": "207", "left": "206", "right": "208", "value": 207},
//       {"id": "208", "left": null, "right": null, "value": 208},
//       {"id": "206", "left": null, "right": null, "value": 206},
//       {"id": "203", "left": null, "right": null, "value": 203},
//       {"id": "5", "left": "2", "right": "15", "value": 5},
//       {"id": "15", "left": "5-2", "right": "22", "value": 15},
//       {"id": "22", "left": null, "right": "57", "value": 22},
//       {"id": "57", "left": null, "right": "60", "value": 57},
//       {"id": "60", "left": null, "right": null, "value": 60},
//       {"id": "5-2", "left": null, "right": null, "value": 5},
//       {"id": "2", "left": "1", "right": "3", "value": 2},
//       {"id": "3", "left": null, "right": null, "value": 3},
//       {"id": "1", "left": "-51", "right": "1-2", "value": 1},
//       {"id": "1-2", "left": null, "right": "1-3", "value": 1},
//       {"id": "1-3", "left": null, "right": "1-4", "value": 1},
//       {"id": "1-4", "left": null, "right": "1-5", "value": 1},
//       {"id": "1-5", "left": null, "right": null, "value": 1},
//       {"id": "-51", "left": "-403", "right": null, "value": -51},
//       {"id": "-403", "left": null, "right": null, "value": -403}
//     ],
//     "root": "100"
//   },
//   "target": 100
// }
