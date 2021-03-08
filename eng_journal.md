
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
