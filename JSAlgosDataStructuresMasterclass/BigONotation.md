# Big O Notation
## The Big Idea
How can we measure the realtive merrits of various working solutions to the same problem?

This [article](https://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/) and this [StackOverflow post](https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript) show 10 different ways to reverse a string in JavaScript. They also discuss perfomance of each solution.


## Time Complexity

### Timing code duration
One way to make data-driven comparisons between algorithmic solutions to problems is by timing how long our code takes to run.

There are problems with this approach...
1. Procedures will take different amounts of time on different machines
2. Procedures will take different amounts of time on the same machine
3. For fast algorithms, speed measurements may not be precise enough

### Counting operations in code
Big O notation allows us to talk formally about the relationship between the input size into a function and the time it takes for that function to execute.

Big O isn't interested in fine details, just in trends.

Big O notation aims to systematically answer the question:
- => as n (inputs) grow, how does the time it takes to execute a function grow?
  - does it grow roughly proportionately to n?
    - that's linear time -- O(n)
  - does it grow

O(1) : constant time
O(log n) : logarithmic time
O(n) : linear time
O(n**2) : quadratic time
O(C**n) : exponential time


### Simplifying analyses
- Big O notation always refers to the worst case scenario
- Big O notation assumes arithmetic operations are constant
- Big O notation assumes variable assignement is constant
- Big O notation assumes accessing elements in an array by index or in an object by key are constant time lookups
- Big O notation assumes that in a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

## Space Complexity

### Rules of thumb
- Most primitives (booleans, numbers, undefined, null) are constant space O(1)
- strings require O(n) space where n is the string length
- Reference types are generally O(n) where n is the length (for arrays or the number of keys (for objects))
