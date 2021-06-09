// Problem Statement
// Given an amount of money to distribute, a list of recipients and how much money each is owed, you should return the list of recipients and how much each would be paid after following the business logic below:

// 1. no recipient is paid more than they are owed
// 2. the amount is divided as evenly as possible between the recipients
// 3. any left over amounts are divided up in alphabetical order by recipient name

// I :
// - pool -- integers
// - recipients -- [{name: 'kendra', owed: 12}]
// O : recipients -- [{name: 'kendra', owed: 12, paid: 6}]

// pool -- 20
// recipients -- [{name: 'kendra', owed: 12}, {name: 'nick', owed: 6}]

// pool -- 10
// recipients -- [{name: 'kendra', owed: 12}, {name: 'nick', owed: 6}]

// sum owed from recipients
// if sum > pool
  // divide pool by number of recipients
  // update each recipient's owed property to that number
// if sum <= pool
  // return recipients updated with new paid property whos value = owed

const payoutDistribution = (pool, recipients) => {
  const recipientsOwedSum = recipients.reduce((accumulator, recipient) => {
      return accumulator + recipient.owed;
  }, 0);

//   return recipientsOwedSum;
  if (recipientsOwedSum > pool) {
    let remainingPool = pool;
    recipients.sort((a,b) => {return a.owed - b.owed}).forEach((recipient, idx) => {
        const splitPaymentAmount = Math.floor(remainingPool / (recipients.length - idx));
        if (splitPaymentAmount > recipient.owed) {
          recipient.paid = recipient.owed;
          remainingPool -= recipient.owed;
        } else {
          recipient.paid = splitPaymentAmount;
          remainingPool -= splitPaymentAmount;
        }
      })
      return recipients;
  } else {
      recipients.forEach(recipient => {
          recipient.paid = recipient.owed;
      })
      return recipients;
  }
};

console.log(payoutDistribution(20, [{name: 'kendra', owed: 12}, {name: 'nick', owed: 6}])) //
console.log(payoutDistribution(10, [{name: 'kendra', owed: 12}, {name: 'nick', owed: 6}])) //
console.log(payoutDistribution(11, [{name: 'kendra', owed: 12}, {name: 'nick', owed: 6}])) // r:1
console.log(payoutDistribution(10, [{name: 'abby', owed: 2}, {name: 'kendra', owed: 12}, {name: 'nick', owed: 6}])) //
console.log(payoutDistribution(1000, [{name: 'abby', owed: 500}, {name: 'kendra', owed: 10}, {name: 'nick', owed: 20}, {name: 'nooks', owed: 1337}]))
// pool: 1000 { d: 500, c: 10, a: 20, b: 1337 }  // output: abby: 485, kendra: 10, nick: 20, nooks: 485
