***
# Mar 16, 2021
So my linkedList's push implementation reveals an ambiguity in my thinking. I was setting the new node's next property to the current tail whereas it's the current tail whose next property should be set to the new node.

The way i had it, isn't a real linkedList. In fact, it's almost a U where the head pointer points to the first node added and the tail pointer points to the most recently added node and each subsequently added node points to the previous node / previous tail. Whereas in reality, each time we add a new node to the tail, the previous tail should point to the new tail. 
***
# Mar 15, 2021
As life gets crazier, daily habits become more, not less important.

***
# Mar 8, 2021

### Trying to clarify my thinking around two pointers solution to squaresOfSortedArray problem.

Here's how the solution works:
- instantiate a new array to be filled with sorted squares and then returned
- instantiate two pointers: one at front and one at back of array
- compare the squares of the values pointed at by each pointer
  - the larger squared value gets placed at index 0 of the return array (unshift)
  - the pointer whose value won out gets moved towards the middle (right pointer always decrements, left pointer always increments) of the input array

repeat until pointers cross

_A couple of conceptual keystones : _

1 - The two pointers start at each end of the input array and move towards each other. The key here is that they never move at the same time... only the pointer whose squared value has just been added to the output array is moved. This is how we ensure no values are skipped.

2 - By always adding the larger of two comparison valued onto the front of the output array, we're creating an ascending sort order where every subsequent element added to the output array pushes the larger elements further towards the back.

3 - Of course, none of these approaches work on an unsorted input array.

### Another repeat pitfall
I'm finding i often get bogged down in looking for solutions of optimal space AND time complexity. If this case, for example working on squaresOfSortedArray, I came to two pointers rather quickly but struggled to find a nice working solution because i was aiming for O(1) constant space complexity.

Not sure how to improve on that besides at the top of every problem, while i'm going IOCE, make hypotheses about time and space complexity constraints, then reason about them. The hope would be that this habit will draw a more meaningful path forward AND provide more concrete thinking to look back on when I get stuck.
***
# Mar 7, 2021
I need to do more reflecting on solution patterns:
- what are the indicators within a prompt that point me towards one solution pattern or another?
- what are all the common sub-patterns / variations of each pattern?
- when to use which?
practice. codify. repeat a lot.

***
# Mar 6, 2021
I need to clean up my loose ends. Today I correctly noted down what to return for edge cases then didn't code them into the solution. Want to train to minimize these kinds of own goals moving forward.
***
# Mar 5, 2021

***
# Mar 4, 2021
Having difficulty intuiting the two-pointers (or frankly any) solution to isSubsequence. Here's my best shot at articulating the high-level strategy here.
- use two pointers, one for each input string, each initialized at index 0
- create a race condition wherein if the string1 pointer reaches the length of string1 the function returns true and if the string2 pointer reaches the length of string2 the function returns false.
  - increment string2 pointer every loop through
  - increment string1 pointer only if the value at string1 pointer's current index is equal to the value found at string2 pointer's current index

This is a linear time O(n) solution because at most, we'll loop over each char in the longer string once.
The naive solution would be quadratic time O(n**2) because we'd use a nested loop
***
# Mar 3, 2021

***
# Mar 2, 2021
Learned a point about two pointer pattern algorithms today, specifically about two pointer sub-patterns.

In one sub-pattern, we set two pointers next to one another and increment or decrement them as a pair, meaning together at the same rate and time. I used this sub-pattern on the areThereDuplicates solution. This pattern is helpful when we're concerned with adjacency. Adjacency is relevant to the areThereDuplicates solution only because that particular problem dealt only with sorted array inputs. In sorted arrays duplicates are necessarily found by looking at adjascent elements.

In another sub-pattern, we set two pointers, one at the first index of an array and another at the last index and then move the pointers towards each other in the middle. I used this sub-pattern on the averagePair solution. This pattern is helpful when we're concerned with finding a value (like a sum, avg, etc) made up from two values in the input array. This sub-pattern also only works on sorted input arrays because the question at each iteration of whether to increment the lower pointer or decrement the higher pointer can only be meaningfully answered of we know with certainty that the lower pointer points to a smaller value than the higher pointer.

***
# Mar 1, 2021
More practice reps with frequency counter pattern and two pointers pattern.
Please with (seeming) fluency of frequency counter implementations.
