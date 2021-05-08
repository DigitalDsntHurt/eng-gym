// initialize a totalScores hash
// iterate over results array
  // create alias for current competition
  // if current result = 1
    // currentCompetition[0] (home team) is the winner
    // create winning team property in totalScores hash or incrememt team's total score by 3

// iterate over each item in totalScores hash, keeping track of team name with largest total score
// reutrn winning team name

function tournamentWinner(competitions, results) {
  let totalScores = {};
	for (let i = 0; i < results.length; i++) {
		if (results[i] === 1) {
			totalScores[competitions[i][0]] = totalScores[competitions[i][0]] + 3 || 3;
		}
		if (results[i] === 0) {
			totalScores[competitions[i][1]] = totalScores[competitions[i][1]] + 3 || 3;
		}
	}

	let maxScore = 0;
	let winningTeam = '';
	for (let team in totalScores) {
		if (totalScores[team] > maxScore) {
			maxScore = totalScores[team];
			winningTeam = team;
		}
	}

  return winningTeam;
}
