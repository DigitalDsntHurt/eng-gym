//
//// ALGO EXPERT
//

// WHILE LOOP APPROACH
function isValidSubsequence(array, sequence) {
	let arrPointer = 0;
	let seqPointer = 0;
	while (seqPointer < sequence.length && arrPointer < array.length) {
		if (array[arrPointer] === sequence[seqPointer]) {
			seqPointer++;
		}
		arrPointer++;
	}
	return seqPointer === sequence.length;
}

// // FOR LOOP APPROACH
// function isValidSubsequence(array, sequence) {
//   sequencePointer = 0;
// 	for (let arrayPointer = 0; arrayPointer < array.length; arrayPointer++) {
// 		if (sequencePointer === sequence.length) { break; }
// 		if (array[arrayPointer] === sequence[sequencePointer]) {
// 			sequencePointer++;
// 		}
// 	}
// 	return sequencePointer === sequence.length;
// }



console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])); // true
