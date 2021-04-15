const ss = ['harp', 'bargain', 'mildew', 'xantham', 'masters']
const a = [2, 7, 3, 15, 100, 0]

console.log(ss.sort())
console.log(a.sort())
console.log(a.sort((a, b) => { return b - a })) // sorts descending
console.log(a.sort((a, b) => { return a - b })) // sorts ascending
