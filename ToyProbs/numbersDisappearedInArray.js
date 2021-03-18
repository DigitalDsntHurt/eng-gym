/*
  FROM : https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

  given an array of integers where
  - array is of length n
  - all array elements are between 1 and n inclusive

  find all elements of the inclusive range 1->n that do not appear in the array

  I : array of integers
  O : array of integers
  E : n/a
  C :
  - O(1) space
  - O(n) time

  NAIVE APPROACH
    instantiate a var missingElements = []
    sort the input array
    {{ handle first element
      if it's 1 continue as normal
      if it's not 1 add nums from 1 to x to missingElements where x = first element - 1
    }}
    for each element of input array
      if current element is not previous element + 1 OR current element is not missingElements last element + 1
        add 1 to max of prevElement and missingElements last element
        push that val onto missingElements
    return missingElements

  OPTIMIZED APPROACH ((O(2n) time) ~~ BUT still O(n) space sorry)
    instantiate var missingElements = []
    sort input array
    for each item in sorted input array
      if (element !== index + 1) we are missing an element
        determine how many elements are missing with the formula element - index - 1
        store numberOfMissingElements in a var of that name

        store currentElement in a var of that name

        while numberOfMissingElements > 0
          missingElements.push(currentElement--)
          numberOfMissingElements--

    return missingElements;

*/


const findDisappearedNumbers = (arr) => {
  let missingElements = [];
  arr = arr.sort();
  arr.forEach((num, idx) => {
    if (num !== idx + 1) {
      let numberOfMissingElements = num - idx - 1;
      let currentElement = num; // maybe i dont need this line and can refactor to decrement num directly?
      while (numberOfMissingElements > 0) {
        missingElements.push(currentElement--);
        numberOfMissingElements--;
      }
    }
  })
  return missingElements;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])) // [5,6]
