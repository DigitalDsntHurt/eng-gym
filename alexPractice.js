

const mergeSortedArrays = (a1, a2) => {
  let sortedMergedArray = [];
  let aPoint = 0;
  let bPoint = 0;

  while (a1[aPoint] !== undefined && a2[bPoint] !== undefined) {
    // add smaller value to sortedMergedArray
    if (a1[aPoint] < a2[bPoint]) {
        sortedMergedArray.push(a1[aPoint]);
        aPoint++;
    }
    if (a2[bPoint] < a1[aPoint]) {
        sortedMergedArray.push(a2[bPoint]);
        bPoint++;
    }
    if (a2[bPoint] === a1[aPoint]) {
      sortedMergedArray.push(a1[aPoint]);
      sortedMergedArray.push(a2[bPoint]);
      aPoint++;
      bPoint++;
    }
  }
  // slice array with remaining indices
  // add sliced array to sortedMergedArray

  if (aPoint < a1.length) {
    sortedMergedArray = sortedMergedArray.concat(a1.slice(aPoint));
  }
  if (bPoint < a2.length) {
    // console.log(bPoint)
    // console.log(a2.length)
    sortedMergedArray = sortedMergedArray.concat(a2.slice(bPoint));
    // console.log(tmp);
  }

  return sortedMergedArray;
};


var t1 = [];
var t2 = [];
console.log(mergeSortedArrays(t1, t2)) // []

t1 = [1, 2, 3];
t2 = [4, 5, 6];
console.log(mergeSortedArrays(t1, t2)) // [1,2,3,4,5,6]

t1 = [3, 9, 19];
t2 = [2, 8, 222];
console.log(mergeSortedArrays(t1, t2)) // [2, 3, 8, 9, 19, 222]
