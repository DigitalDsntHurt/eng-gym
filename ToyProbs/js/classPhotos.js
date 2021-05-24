/*
FROM : https://www.algoexpert.io/questions/Class%20Photos
*/

/*
I : 2 arrays of positive integers
O : boolean
    - is it possible to arrange the two arrays such that
		every element in one array is larger than each corresponding
		element in the other array
E :
C :

STRATEGY
  sort input array 1
	sort input array 2
	compare the first element of each array
	  if ele 1 of input array 1 equals ele 1 of input array 2
		  return false
	  if ele 1 of input array 1 is larger than ele 1 of input array 2
		  input array 1 becomes the back row
		if ele 1 of input array 2 is larger than ele 1 of intput array 1
		  input array 2 becomes the back row

	iterate over back row array (starting at idx 1).. for each element
	  if it's greater than element at same index of front row array
		  continue
		else
		  return false

	return true if we make it to the end
*/

function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights = redShirtHeights.sort((a,b) => a - b);
	blueShirtHeights = blueShirtHeights.sort((a,b) => a - b);
	let backRow;
	let frontRow;
	if (redShirtHeights[0] === blueShirtHeights[0]) { return false; }
	if (redShirtHeights[0] > blueShirtHeights[0]) {
		backRow = redShirtHeights;
		frontRow = blueShirtHeights;
	}
	if (blueShirtHeights[0] > redShirtHeights[0]) {
		backRow = blueShirtHeights;
		frontRow = redShirtHeights;
	}

	for (let i = 1; i < backRow.length; i++) {
		if (backRow[i] < frontRow[i]) { return false; }
	}

  return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
