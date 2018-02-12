const word = require('./word');

const letter = function() {

	this.underScoreArray = [];
	this.remainingGuesses = 10;
	this.wrongLetters = [];
	const generateWord = new word;
	const currentWord = generateWord.generateWord();
	this.currentWordLetters = currentWord.split("");
		
	for (let i = 0; i < this.currentWordLetters.length; i++) {
		this.underScoreArray.push("_");
	}
	

	console.log(currentWord);

	this.showGame = function() {
		console.log(`Remaining Guesses: ${this.remainingGuesses}`);
		console.log('')
		console.log(`Current Word: ${this.underScoreArray}`);
	};

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