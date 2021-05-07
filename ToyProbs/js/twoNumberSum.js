// // o(n**2) time, o(1) space
// function twoNumberSum(array, targetSum) {
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = i + 1; j < array.length; j++) {
// 			if (array[i] + array[j] === targetSum) {
// 				return [array[i], array[j]];
// 			}
// 		}
// 	}
// 	return [];
// }

// // O(n) time, O(n) space
function twoNumberSum(array, targetSum) {
  let frequencies = {};
	for (let num of array) {
		let lookingFor = targetSum - num;
		if (frequencies[lookingFor]) { return [num, lookingFor]; }
		frequencies[num] = true;
	}
	return [];
}

// // O(NlogN) time, O(1) space
// two pointers solution
function twoNumberSum(array, targetSum) {
	array = array.sort((a,b) => a - b);

	let left = 0;
	let right = array.length - 1;
	while (right > left) {
		const sum = array[left] + array[right];
		if (sum === targetSum) {
			return [array[left], array[right]];
		}
		if (sum > targetSum) {
			right--;
		}
		if (sum < targetSum) {
			left++;
		}
	}
	return [];
}
