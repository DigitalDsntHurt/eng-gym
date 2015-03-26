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
