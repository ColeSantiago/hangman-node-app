const word = require('./word');

const letter = function() {

	const generateWord = new word;
	const currentWord = generateWord.generateWord();

	console.log(currentWord);
}

letter();