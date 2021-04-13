// const binarySearch = (array, target) => {
//   let front = 0;
//   let back = array.length - 1;
//   let mid = Math.floor((front + back) / 2);
//   while (target !== array[mid] && front <= back) {
//     if (target > array[mid]) { front = mid + 1; }
//     if (target < array[mid]) { back = mid - 1; }
//     mid = Math.floor((front + back) / 2);
//   }
//   return array[mid] === target ? array[mid] : -1;
// }

// // SECOND BLIND TRY
// function binarySearch(array, target){
//   let front = 0;
//   let back = array.length - 1;
//   let midpoint = Math.floor((front + back) / 2);
//   while (target !== array[midpoint] && front <= back) {
//     if (target > array[midpoint]) { front = midpoint + 1; }
//     if (target < array[midpoint]) { back = midpoint - 1; }
//     midpoint = Math.floor((front + back) / 2);
//   }
//   return target === array[midpoint] ? midpoint : -1;
// }

// ONCE MORE
function binarySearch(array, target){
  let front = 0;
  let back = array.length - 1;
  let midpoint = Math.floor((front + back) / 2);
  while (front <= back) {
    if (target === array[midpoint]) { return midpoint; }
    if (target > array[midpoint]) { front = midpoint + 1; }
    if (target < array[midpoint]) { back = midpoint - 1; }
    midpoint = Math.floor((front + back) / 2);
  }
  return -1;
}


console.log(binarySearch([1,2,3,4,5], 2)) // 1
console.log(binarySearch([1,2,3,4,5], 3)) // 2
console.log(binarySearch([1,2,3,4,5], 15)) // -1
