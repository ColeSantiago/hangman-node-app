let letter = require('./letter')

const word = function() {

	const possibleWords = ['delorean', 'einstein', 'plutonium', 'hoverboard', 'outatime', 'biff'];

	this.generateWord = function() {
		let currentWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];

		return currentWord;

		// console.log(currentWord);
	}
}

module.exports = word;