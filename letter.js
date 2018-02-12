const word = require('./word');

const letter = function() {

	const underScoreArray = [];
	this.remainingGuesses = 10;
	const wrongLetters = [];
	const generateWord = new word;
	const currentWord = generateWord.generateWord();
	let currentWordLetters = currentWord.split("");

	this.getWord = function() {
		for (let i = 0; i < currentWordLetters.length; i++) {
			underScoreArray.push("_");
		}
	}

	console.log(currentWordLetters);

	this.showGame = function() {
		console.log(`Remaining Guesses: ${this.remainingGuesses}`);
		console.log(`Used Letters: ${this.wrongLetters}`);
		console.log('')
		console.log(`Current Word: ${underScoreArray}`);
	};

	this.checkLetter = function(theWord, userGuess) {

		if (currentWordLetters.indexOf(userGuess) === -1 && wrongLetters.indexOf(userGuess) === -1) {
				wrongLetters.push(userGuess);
				this.remainingGuesses--;
				// checkWin();
					
			} else {

				for (let i = 0; i < currentWordLetters.length; i++) {

					if (userGuess === currentWordLetters[i] && underscoreArray.indexOf(userGuess) === -1) {
						underscoreArray[i] = userGuess;
						this.remainingGuesses--;
						// checkWin();		
					}

					if (wrongLetters[i] == userGuess) {
						this.remainingGuesses + 0;
					}
				}
		}	
	}

}

module.exports = letter;