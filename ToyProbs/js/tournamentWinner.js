
//// FIRST APPROACH
////// O(2N) TIME, O(N) SPACE
// initialize a totalScores hash
// iterate over results array
  // create alias for current competition
  // if current result = 1
    // currentCompetition[0] (home team) is the winner
    // create winning team property in totalScores hash or incrememt team's total score by 3

// iterate over each item in totalScores hash, keeping track of team name with largest total score
// reutrn winning team name
//
// function tournamentWinner(competitions, results) {
//   let totalScores = {};
// 	for (let i = 0; i < results.length; i++) {
// 		if (results[i] === 1) {
// 			totalScores[competitions[i][0]] = totalScores[competitions[i][0]] + 3 || 3;
// 		}
// 		if (results[i] === 0) {
// 			totalScores[competitions[i][1]] = totalScores[competitions[i][1]] + 3 || 3;
// 		}
// 	}
//
// 	let maxScore = 0;
// 	let winningTeam = '';
// 	for (let team in totalScores) {
// 		if (totalScores[team] > maxScore) {
// 			maxScore = totalScores[team];
// 			winningTeam = team;
// 		}
// 	}
//
//   return winningTeam;
// }

// next steps
// it should be possible to get the time complexity down to O(n) by keeping
// track of the current max score and current wining team as we build the
// totalScores hash, this would prevent us from having to perform a second loop
// where we loop over the hash table to derive the winner.

// // // SOLUTION OPTIMIZATION #1
// // below we tweak the solution slightly to use fewer aliases in the second loop
//
// function tournamentWinner(competitions, results) {
//   let totalScores = {'': 0};
// 	for (let i = 0; i < results.length; i++) {
// 		if (results[i] === 1) {
// 			totalScores[competitions[i][0]] = totalScores[competitions[i][0]] + 3 || 3;
// 		}
// 		if (results[i] === 0) {
// 			totalScores[competitions[i][1]] = totalScores[competitions[i][1]] + 3 || 3;
// 		}
// 	}
//
// 	// let maxScore = 0;
// 	let winningTeam = '';
// 	for (let team in totalScores) {
// 		if (totalScores[team] > totalScores[winningTeam]) {
// 			// maxScore = totalScores[team];
// 			winningTeam = team;
// 		}
// 	}
//
//   return winningTeam;
// }

// // SOLUTION OPTIMIZATION #2
// below we tweak the solution slightly
// we initialize the totalScores hash w a key of empty string & a value of 0
// we also initialize a winningTeam variable to hold an empty string
// this way we can set the winning team within the main loop
// without having to build a second loop to traverse the completed total scores hash
//

function tournamentWinner(competitions, results) {
  let winningTeam = '';
  let totalScores = {'': 0};
	for (let i = 0; i < results.length; i++) {
		if (results[i] === 1) {
			totalScores[competitions[i][0]] = totalScores[competitions[i][0]] + 3 || 3;
      if (totalScores[competitions[i][0]] > totalScores[winningTeam]) {
        winningTeam = competitions[i][0];
      }
		}
		if (results[i] === 0) {
			totalScores[competitions[i][1]] = totalScores[competitions[i][1]] + 3 || 3;
      if (totalScores[competitions[i][1]] > totalScores[winningTeam]) {
        winningTeam = competitions[i][1];
      }
		}
	}
  return winningTeam;
}
