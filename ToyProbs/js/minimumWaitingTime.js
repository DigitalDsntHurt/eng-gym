// function minimumWaitingTime(queries) {
// 	if (queries.length < 2) { return 0; }
// 	queries = queries.sort((a,b) => { return a - b; });
// 	queries = queries.map((item, idx) => {
// 		return queries.slice(0,idx)//.reduce((acc, val) => acc + val)
// 	}).slice(1)
// 	queries = queries.map(num => {
// 		return num.reduce((acc, val) => acc + val );
// 	}).reduce((acc, val) => acc + val)
// 	return queries;
// }
//
// // Do not edit the line below.
// exports.minimumWaitingTime = minimumWaitingTime;

// ITERATIVE APPROACH
function minimumWaitingTime(queries) {
	let duration = 0;
	queries = queries.sort((a,b) => a - b);
	console.log(queries);
	queries.forEach((query, idx) => {
		let queriesLeft = queries.length - (idx + 1)
		duration += query * queriesLeft;
	})
	return duration;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
