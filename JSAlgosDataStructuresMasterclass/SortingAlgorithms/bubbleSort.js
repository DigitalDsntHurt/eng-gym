const swapValues = (arr, idx1, idx2) => {
    let tmp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmp;
}
// // test swapvalues
// let arr1 = [1,2,3]
// swapValues(arr1, 1, 2)
// console.log(arr1) //[1, 3, 2]
//
// let arr2 = [11,-22,'bubble']
// swapValues(arr2, 2, 0)
// console.log(arr2) //['bubble', -22, 11]

const bubbleSort = (arr) => {
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = 0; j = i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        // swap values
      }
    }
  }
  return arr;
}

console.log(bubbleSort([3,33,54,2,1])) // [1, 2, 3, 33, 54]
console.log(bubbleSort([3,-4,-5])) // [-5, -4, 3]
console.log(bubbleSort([11,12,13])) // [11,12,13]
