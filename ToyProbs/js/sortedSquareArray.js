function sortedSquaredArray(array) {
  // iterate over each item in array
	  // square the value and replace current item
	// return array

	for(let i = 0; i < array.length; i++) {
		array[i] = array[i]*array[i];
	}
  return array.sort((a,b) => a > b );
}
