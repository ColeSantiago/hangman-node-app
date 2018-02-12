const word = require('./word');

const letter = function() {
	// amount of guesses
	this.remainingGuesses = 15;

	// taking the choosen word and creating an array of underscores for it
	this.underScoreArray = [];
	this.wrongLetters = [];
	const generateWord = new word;
	const currentWord = generateWord.generateWord();
	this.currentWordLetters = currentWord.split("");
		
	for (let i = 0; i < this.currentWordLetters.length; i++) {
		this.underScoreArray.push("_");
	}
	
	console.log(currentWord);

	// function to display the game to the command line
	this.showGame = function() {
		console.log(`Remaining Guesses: ${this.remainingGuesses}`);
		console.log('')
		console.log(`Current Word: ${this.underScoreArray}`);
	};

	// function to check if the letter pressed is in the choosen word
	this.checkLetter = function(userGuess) {

		this.userGuess = userGuess.input;

		if (this.currentWordLetters.indexOf(this.userGuess) === -1) {
				
			this.remainingGuesses--;
			checkWin();
					
		} else {

			for (let i = 0; i < this.currentWordLetters.length; i++) {

				if (this.userGuess === this.currentWordLetters[i]) {
					this.underScoreArray[i] = this.userGuess;
					this.remainingGuesses--;
					checkWin();		
				}

				if (this.wrongLetters[i] == this.userGuess) {
					this.remainingGuesses + 0;
				}
			}
		}	
	}

	// function to check if the user won or lost
	function checkWin() {
		if (this.underscoreArray === this.currentWordLetters) {
			console.log('************************');
			console.log('*******You Won!!!*******');
			console.log('************************');
			console.log('');

		} if (this.remainingGuesses === 0) {
			console.log('-------------------------')
			console.log('-You ran out of guesses!-')
			console.log('-------------------------')
			console.log('');
			
		}
	}

}

module.exports = letter;