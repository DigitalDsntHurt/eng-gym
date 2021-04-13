const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) { return i; }
  }

  return -1;
}

console.log(linearSearch([10,15,20,25,30], 15))
