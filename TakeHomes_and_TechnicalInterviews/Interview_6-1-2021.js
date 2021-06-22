

// ## Agenda

// 5 - intro
// 	- intro myself
// 	- intro yourself!
// 	- explain the agenda
// 	- expectations for the problem
// 50 - problem
// 5 - Q&A

// ## Preamble

// - I'm going to be taking notes during our time together, so if you hear me tapping away, that's what's going on :)
// - Let's run through how to use Code Signal
// - It's not true that if you finish the problem you ace the interview
// - It's not true that if you don't finish the problem that you bomb the interview
// - I'm looking to see your process and problem sovling skills
// - You can use the internet to look up docs and so forth. Just tell me what you're seeing

// Hash Diff

// At Gusto, we often times need to “effective-date” our models. What this means is that we need to be able to easily tell what the historical, current, and future value of the model is/was. For example, many employees on our platform may change their address over the course of several years, and we’ll need to know when each address was “effective” to properly file taxes.

// ---

// Implement a Key-Value Store where you can:

// Register a key value to be effective at any point in time
// Ask what a value is at any given time for a key

/*
    I : {
        state: 'CO',
        employeeCount: 99
    }

    O : {
        state: [
            {effectiveDate: 1/1/2018, state: 'RI'},
            {effectiveDate: 1/1/2020, state: 'CO'},
        ],
        employeeCount: []
    }

    class
     - on instantiation create custom keys
     - add custom keys to existing store (class method)
     - getter for each key
       - takes value
       - takes date
     - setter for each key (push-ish)

     new Store(p1, p2, p3)

*/

class Store {
    constructor() {

    }

    addKey(keyName){
        this[keyName] = [];
    }

    setKey(keyName, date, value) {
        this[keyName].push({
            effectiveDate: date,
            state: value
        })
    }

    getKey(keyName, date) {
        // date before first date
        // date between two values
        // date after last date

        // for (let obj of this[keyName]) {
        //     let currentDate = obj.effectiveDate;
        //     if (date < currentDate) {
        //         // select previous date
        //     }
        //     if (date > currentDate) {
        //         // next obj
        //     }
        // }

        for (let i = 0; i < this[keyName].length; i++) {
            let currentDate = this[keyName][i]['effectiveDate'];

            // handle case where input date is less than first date
            if (date < this[keyName][0]['effectiveDate']) {
                return null;
            }
            if (date < currentDate && i > 0) {
                // return value of the previous obj
                return this[keyName][i - 1][keyName];
            }
            // handle case where input date is greater than last date
            if (date >= this[keyName][this[keyName].length - 1]['effectiveDate']) {
                return this[keyName][this[keyName].length - 1][keyName];
            }

        }
    }
}

// let birthday = new Date('December 17, 1995 03:24:00')
// let birthday = new Date('1995-12-17T03:24:00')
// let birthday = new Date(1995, 11, 17)

let newStore = new Store();
newStore.addKey('state');

newStore.setKey('state', new Date(2018, 1, 14), 'RI');
newStore.setKey('state', new Date(2020, 11, 17), 'CO');

console.log(newStore);
console.log(newStore.getKey('state', new Date(2016, 11, 17))) // null
console.log(newStore.getKey('state', new Date(2018, 11, 17))) // 'RI'
console.log(newStore.getKey('state', new Date(2020, 11, 18))) // 'CO'

// Store {
//   state: [
//     { effectiveDate: 2018-02-14T00:00:00.000Z, state: 'RI' },
//     { effectiveDate: 2020-12-17T00:00:00.000Z, state: 'CO' }
//   ]
// }
// newStore.addKey('employeeCount');
