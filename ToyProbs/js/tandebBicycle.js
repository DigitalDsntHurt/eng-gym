/*
  FROM : https://www.algoexpert.io/questions/Tandem%20Bicycle
*/

/*
  I : two arrays of integers and a boolean
	O : a number - min or max depending on third argument value
	E :
	C :

	SCRATCH
	[2,3,5,5,9]
	[1,2,3,6,7]

	how to find the max?
	- sorted pairs
	[
	  2,1=2
		3,2=3
		5,3=5
		5,6=6
		9,7=9
	]    =25
	- opposite pairs
	[
	  2,7=7
		3,6=6
		5,3=5
		5,2=5
		9,1=9
	]    =32
	- pairs by greatest difference

	STRATEGY
	sort redShirtSpeeds
	sort blueShirtSpeeds
	instantiate a speed variable set to 0

	if fastest
		reverse redShirtSpeeds
		for each item in redShirtSpeeds
		  take current item in redShirtSpeeds
			take item of same idx in blueShirtSpeeds
			calculate max between these two values
			add max to speed var
		return speed

	if !fastest
		for each item in redShirtSpeeds
		  take max of current item in redShirtSpeeds and item of same index in blueShirtSpeeds
			add max to speed var
		return speed

*/

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a,b) => a - b);
	blueShirtSpeeds.sort((a,b) => a - b);
	let speed = 0;
	if (fastest === true) {
		redShirtSpeeds.reverse();
		console.log(redShirtSpeeds)
		console.log(blueShirtSpeeds)
		for (let i = 0; i < redShirtSpeeds.length; i++) {
			speed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
		}
		return speed;
	}

	if (fastest === false) {
		for (let i = 0; i < redShirtSpeeds.length; i++) {
			speed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
		}
		return speed;
	}
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
