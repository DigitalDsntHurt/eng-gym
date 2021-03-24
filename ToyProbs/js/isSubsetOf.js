/*
 * Write an array method that determines whether or not an array is a subset of another array.
 * http://en.wikipedia.org/wiki/Subset
*/

Array.prototype.isSubsetOf = (arr) => {};

var a = ['commit','push']
a.isSubsetOf(['commit','rebase','push','blame']) // true
var b = ['merge','reset','reset']
b.isSubsetOf(['reset','merge','add','commit']) // true

/*
 * Extra credit: Method works for arrays that contain objects and/or arrays as elements.
*/