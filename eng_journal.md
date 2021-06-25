***
# June 25, 2021
***
# June 22, 2021
***
# June 21, 2021
***
# June 20, 2021
***
# June 19, 2021
***
# June 17, 2021
***
# June 15, 2021
***
# June 14, 2021
***
# June 13, 2021
***
# June 12, 2021
***
# June 8, 2021
***
# June 7, 2021
***
# June 6, 2021
***
# June 5, 2021
***
# June 4, 2021
***
# June 3, 2021

first fb tech screen

given
- P = an array of coordinates [(5,3),(1,2),(6,4)]
- r = a number representing a radius length
- Q = an array of coordinates [(1,2),(2,1),(3,3)]

return an array of coordinates of length Q
where returnArray[i] = a point within P that is within r of Q[i]
if there is no point in P that is within r of a given point in Q, add [null, null] to the return array.
***
# June 2, 2021
***
# May 31, 2021
***
# May 29, 2021
***
# May 28, 2021
***
# May 27, 2021
***
# May 26, 2021
***
# May 23, 2021
***
# May 18, 2021
***
# May 11, 2021
***
# Apr 26, 2021
***
# Apr 24, 2021
***
# Apr 22, 2021
***
# Apr 19, 2021
***
# Apr 18, 2021
***
# Apr 17, 2021
***
# Apr 16, 2021
***
# Apr 14, 2021
***
# Apr 12, 2021
***
# Apr 6, 2021

***
# Apr 3, 2021

***
# Mar 29, 2021

***
# Mar 28, 2021

***
# Mar 24, 2021
Started sharpening up my ruby again today, repeating older javascript toy problems. A few worthy notes...

```
# method definition
def name_of_method(ordered_parameters)
  puts 'hey we do some logic'
  [1,2,3].push(ordered_parameters) # implicit returns
end

# method invocation
name_of_method(99) # returns [1,2,3,99] after logging 'hey we do some logic'

# if statement syntax
if condition
  thing to do
else if other_condition
  next thing to do
else
  last thing to do
end

# ternary syntax
condition ? do if true : do if false

# multiple expression ternary syntax

condition ? (if true do this; then do this) : (if false do this; then do this; then do this)

```
***
# Mar 24, 2021

## VitalSource on-site
* first exercise: implement features from tickets
 * i just barely implemented the first ticket. the challenge was to store user id, ip address, controller and view information each time a user loads a page
  * the first step was creating a new model / new database table
    * easy enough but i meant to run rails g scaffold instead i ran rails g model
    * there was also an interesting rails error where the rails g model command created a new migration with commas where there shouldn't have been commas so we needed to debug that issue
  * the next step was actually getting new records saved to the db
    * i totally stalled out
      * 1 - i wanted a general solution instead of throwing the logic inside each relevant controller method. but i didn't have an idea of where / how to implement the generalizable solution. ***i spent too much time not moving forward here and i should have just written the ghetto, non-dry solution immediately.*** So ultimately, with the interviewer's help, i ended up writing the record creation logic inside the index method on the carts controller because this was the first page the user is redirected to after login.
      * 2 - i didn't know how to access the user id or the ip address. it turned out the user id was already available on the params object being passed to the controller i was working in. then i should have just googled how to access the ip address, but i was nervous and the interviewer actually asked me 'what's preventing you from googleing now?' owch, lol. It turns out there's a globally available object called the request object on which lives a property called remote_ip. so adding request.remote_ip to the Model.create arguments was all it would have taken.
* second exercise: explore the code base out loud, get oriented, ask questions as you go
* third exercise: perform a code review: write feedback on a PR
* Technical Questions
 * hardest engineering challenge solved in last 6 months
 * pros and cons of rails
 * pros and cons of react
 * how do you debug problems in production
 * what are the fundamental difference between es5 and es6?
 * what is closure?
 * what is hoisting?

Additionally, when i asked what questions i should have asked they gave me a couple gems!
* ask about our tech debt
* ask what a typical day and week are like on this team

***
# Mar 23, 2021
* I did not have a great answer for the question `what is the most difficult engineering challenge you've solved?`
* I did not have a great answer for the question `how do you debug problems with babel?`

***
# Mar 20, 2021
## Feedback from take-home scenarios, Application for Oncue's Senior Software Engineer (Full Stack) position

### written exercises
* when listing potential approaches to finding a bug, list likelihood of each proposed / brainstormed solution

* when writing email to junior colleague about how to spend their time debugging, be much more specific: suggest actual action items, provide actual curl commands and/or links to documentation

### code exercises
* extract new functions / generate helper methods where appropriate to show great modular code design

* impress by (new) writing tests for the solution you write (they actually suggested looking into Mocha : https://mochajs.org/)

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
