// start reading 5:09

// give testcase console.log(solve("")); // 0
// console.log(solve("a")); // 0

//finished algorithm 5:21  - nice job on the pseudocode...you identified the core logic
//reread the algorithm and caught more details and filled in holes in algorithm, good

//rereading one more time 5:25

//starting to code 5:32

function solve(s) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const substrArr = s.split(/[aeiou]+/g);
	const sumsArr = substrArr.map(substr => {
		return substr.split('').reduce((total, char) => {
			return total + alphabet.indexOf(char) + 1;
		}, 0);
	});
	return Math.max(...sumsArr);
};

console.log(solve("zodiac")); // 26
console.log(solve("chruschtschov")); //80
console.log(solve("khrushchev")); // 38
console.log(solve("strength")); // 57
console.log(solve("catchphrase")); // 73
console.log(solve("twelfthstreet")); // 103
console.log(solve("mischtschenkoana")); // 80
console.log(solve("a"));
