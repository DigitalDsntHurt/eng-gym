

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
