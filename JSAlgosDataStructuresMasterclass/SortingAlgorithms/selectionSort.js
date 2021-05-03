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
// TEST SWAP ITEMS
let arr = [1,2,3,4,5,6,7,8];
swapItems(arr, 7, 0);
console.log(arr); // [8, 2, 3, 4, 5, 6, 7, 1]

// FIRST ATTEMPT
const selectionSort = (collection) => {
  for (let i = 0; i < collection.length; i++) {
    const outerVal = collection[i];
    for (let j = i + 1; j < collection.length; j++) {
      const innerVal = collection[j];
    }
  }
};
