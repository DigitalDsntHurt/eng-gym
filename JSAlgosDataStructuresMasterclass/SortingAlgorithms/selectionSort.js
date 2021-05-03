/*
  In selection sort, we iterate over the items in a collection, looking for
  the smallest element and placing it at the beginning of the collection.

  In this way, selection sort is similar to bubble sort. In bubble sort,
  we looked for large values and placed them at the end of the collection.
  In selection sort we are looking for small values and placing them at
  the beginning.
*/

/*
  For our first attempt, we will use a two pointers strategy.
  We will iterate over each item in the collection.
  Our first pointer will point to the current item in the iteration.
  Then we will use an inner loop to advance our second pointer.
  Within this inner loop we are looking for the smallest value in the
  collection which means that for each iteration in the second loop,
  we will compare the current value to the second pointer's current value
  and update the second pointer only if the current inner loop value is less
  than the current second pointer value.
  Once we arrive at the end of the inner loop,
  - the first pointer should be pointing to the first unsorted item in the collection
  - the second pointer should be pointing to the smallest item in the collection
  and then all we need to do is swap the values at each pointer.
*/

// SWAP ITEMS
const swapItems = (arr, i1, i2) => {
  const tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
};
// // TEST SWAP ITEMS
// let arr = [1,2,3,4,5,6,7,8];
// swapItems(arr, 7, 0);
// console.log(arr); // [8, 2, 3, 4, 5, 6, 7, 1]

// // FIRST ATTEMPT // NO!!
// const selectionSort = (collection) => {
//   for (let i = 0; i < collection.length; i++) {
//     let pointerIndex = i + 1;
//     let pointerValue = collection[pointerIndex];
//     for (let j = pointerIndex + 1; j < collection.length; j++) {
//       let tryValue = collection[j];
//       if (tryValue < pointerValue) { pointerIndex = j; }
//     }
//     if (collection[pointerIndex] < collection[i]) { swapItems(collection, i, pointerIndex)}
//   }
//   return collection;
// };

// // SECOND ATTEMPT // !!NO!!
// const selectionSort = (collection) => {
//   for (var i = 0; i < collection.length; i++) {
//     for (var j = i + 1; j < collection.length; j++) {
//       if (collection[j] < collection[i]) { swapItems(collection, i, j)}
//     }
//   }
//   return collection;
// };

// // THIRD ATTEMPT //WORKS
// const selectionSort = (collection) => {
//   for (var i = 0; i < collection.length; i++) {
//     let minValIdx = i;
//     for (var j = i + 1; j < collection.length; j++) {
//       if (collection[j] < collection[minValIdx]) {
//         minValIdx = j;
//       }
//     }
//     if ( collection[minValIdx] < collection[i]) { swapItems(collection, i, minValIdx); }
//   }
//   return collection;
// };

// REWRITE FROM PSEUDOCODE
/*
  - store the first element as the smalest value seen so far
  - compare this item to the next item in the array until you find
  a smaller number
  - if a smaller number is found, designate that smaller number to be
  the new minimum and continue until the end of the array
  - if the minimum is not the value (index) you initially began with,
  swap the two values
  - repeat this with the next element until the array is sorted
*/
const selectionSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    let smallest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) { smallest = j; }
    }
    if (i !== smallest) { swapItems(arr, i, smallest); }
  }
  return arr;
};

// TESTS
console.log(selectionSort([11,1])) // [1, 11]
console.log(selectionSort([1,11])) // [1, 11]
console.log(selectionSort([44, 444, -4, 4])) // [-4, 4, 44, 444]
console.log(selectionSort([-44, 444, 4, 4])) // [-44, 4, 4, 444]


/*
  selection sort is O(n**2) quadratic time, which is similar to bubble sort
  except the best implementations of bubble sort provide for doing less work
  given a nearly sorted input collection.

  the only time selection sort is preferable to bubble sort is in cases where
  we're concerned with ram.

  selection sort does a lot of nested iterating and a lot of comparisons but
  only actually swaps values at most once per out loop. whereas bubble sort
  is swapping every time through the inner loop. it's rare we would care about
  this internal memory usage difference, but if we did we might choose
  selection sort over bubble. 
*/
