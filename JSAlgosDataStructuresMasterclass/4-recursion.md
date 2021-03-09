# Recursion
## The call stack
All programming languages has a data structure responsible for managing the order of operations executed by the interpreter.

In javascript this data structure is a stack. More specifically it's called the **call stack**.

Any time a function is invoked its placed at the top of the call stack.

When javascript sees the return keyword or when the function ends, the compiler removes that function call from the top of the stack.
## Two essential parts of a recursive function
* base case
* recursive case
## Common recursion pitfalls
* no base case
* wrong base case
* failing to return on the base case (for example, maybe we just log without returning -- **stack overflow**)
* returning the wrong thing in the recursive case
## Helper Method Recursion
### A common recursion pattern
Helper method recursion is where we wrap our recursive function as well as the call to it inside an outer (non-recursive) function. Typically, this allows us to take advantage of variables scoped outside the recursive function to do things like compile results from subsequent recursive calls.

Here's the pattern generalized in pseudocode
```
const outerFunction = (input) => {
  let results = [];
  const recursiveFunction = (recursiveInput) => {
    // base case
    // add some part of recursiveInput to results
    // make recursive call on subset of recursiveInput
    recursiveFunction(recursiveInput--)
  }
  recursiveFunction(input);
}
```
High-level summary:
- Helper method recursion is a patterns where a non-recursive outer functions calls an inner function that is recursive

## Pure Recursion Tips
* for arrays, use methods like slice, concat, spread that make copies of arrays so we don't mutate them
* same idea with strings but strings are immutable so we'll need to use methods like slice, substr or substring to make copies
* for objects use Object.assign or the spread operator
