function isValidSubsequence(array, sequence) {
	let arrPointer = 0;
	let seqPointer = 0;
	while (sequence[seqPointer]) {
		if (array[arrPointer] === sequence[seqPointer]) {
			seqPointer++;
		}
		arrPointer++;
	}
	return array[arrPointer] === sequence[seqPointer];
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])); // true
