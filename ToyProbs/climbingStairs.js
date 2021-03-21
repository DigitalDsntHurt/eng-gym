/*
  FROM : https://leetcode.com/problems/climbing-stairs/

  You are climbing a staircase. It takes n steps to reach the top.
  Each time you can either climb 1 or 2 steps.
  In how many distinct ways can you climb to the top?

  I: number
  O: number
  E: n/a
  C:

  APPROACH #1
  - how many ways are there to climb to the top of a staircase whose n = 1?
    - 1 ([1])
  - how many ways are there to climb to the top of a staircase whose n = 2?
    - 2 ([2], [1,1])
  - how many ways are there to climb to the top of a staircase whose n = 3?
    - 3 ([1, 1, 1], [1, 2], [2, 1])


!!!!!!!!!!!!!!!!!!!!!!!!!
i don't understand it fully, but among the weird and confusing solutions
here's the one i'm closest to groking :
- https://leetcode.com/problems/climbing-stairs/discuss/914779/Easy-DP-JS-Solution
*/

const climbStairs = (n) => {
  if (n === 1) { return  1; }
  if (n === 2) { return  2; }
  if (n === 3) { return  3; }
  return 1 + climbStairs(n - 1)

};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
