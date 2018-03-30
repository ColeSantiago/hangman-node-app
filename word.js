let letter = require('./letter')

// picks a random word and exports it
const word = function() {
	const possibleWords = ['wand', 'hagrid', 'scar', 'hedwig', 'firebolt', 'hogwarts', 'dragon', 'fang', 'fawkes'];
	this.generateWord = function() {
		let currentWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];

		return currentWord;
	}
};

module.exports = word;