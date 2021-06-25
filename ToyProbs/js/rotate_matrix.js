/**
 * You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.

Example 1:

Given input matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],

rotate the input matrix such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
 */

const rotateMatrix = (matrix) => {
  const numColumns = matrix[0].length
  const numRows = matrix.map(row => row[row.length]).length
  console.log(numColumns, ' colums & ', numRows, ' rows')

  for (let col = 0; col < numColumns; col++) {
    for (let row = 0; row < numRows; row++) {

    }
  }
}

const ex1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
rotateMatrix(ex1)

const ex2 = [
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
rotateMatrix(ex2)

const ex3 = [
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11],
  [16, 7,10,11],
  [16, 7,10,11],
  [16, 7,10,11],
]
rotateMatrix(ex3)


const ex4 = [
  [15,13, 2, 5, 14, 3, 4, 1],
  [15,13, 2, 5, 14, 3, 4, 1],
  [15,13, 2, 5, 14, 3, 4, 1],
  [15,13, 2, 5, 14, 3, 4, 1],
  [15,13, 2, 5, 14, 3, 4, 1],
  [15,13, 2, 5, 14, 3, 4, 1],
  [15,13, 2, 5, 14, 3, 4, 1],
  [15,13, 2, 5, 14, 3, 4, 1],
  [15,13, 2, 5, 14, 3, 4, 1],]
rotateMatrix(ex4)