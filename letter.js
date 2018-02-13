const word = require('./word');

const letter = function() {
	// amount of guesses
	this.remainingGuesses = 10;

	this.underScoreArray = [];
	this.wrongLetters = [];
	this.wins = 0;
	this.losses = 0;

	// taking the choosen word and creating an array of underscores for it
	this.chooseWord = function() {
		const generateWord = new word;
		const currentWord = generateWord.generateWord();
		this.currentWordLetters = currentWord.split("");
			
		for (let i = 0; i < this.currentWordLetters.length; i++) {
			this.underScoreArray.push("_");
		}
		
		// console.log(currentWord);
	}

	// function to display the game to the command line
	this.showGame = function() {
		console.log('')
		// console.log(`Wins: ${this.wins}`);
		// console.log(`Losses: ${this.losses}`);
		console.log(`Remaining Guesses: ${this.remainingGuesses}`);
		console.log(`Used Letters: ${this.wrongLetters}`);
		console.log('')
		console.log(`Current Word: ${this.currentWordLetters}`);
		console.log(`Current Word: ${this.underScoreArray}`);
		console.log('')

	};

	// function to check if the letter pressed is in the choosen word, if it's worng, or if it's already been pressed
	this.checkLetter = function(userGuess) {

		this.userGuess = userGuess.input;

		if (this.currentWordLetters.indexOf(this.userGuess) === -1 && this.wrongLetters.indexOf(this.userGuess) === -1) {
				this.wrongLetters.push(this.userGuess);
				this.remainingGuesses--;
				this.checkWin();	
					
		} else {

			for (let i = 0; i < this.currentWordLetters.length; i++) {

				if (this.userGuess === this.currentWordLetters[i] && this.underScoreArray.indexOf(this.userGuess) === -1) {
					this.underScoreArray[i] = this.userGuess;
					this.remainingGuesses--;
					this.checkWin();		
				}

				if (this.wrongLetters[i] == this.userGuess) {
						this.remainingGuesses + 0;
				}

			}	
		}	
	}

	// function to check if the user won or lost
	this.checkWin = function() {
		if (this.underScoreArray.indexOf('_')  < 0) {
			// this.wins++
			console.log('')
			console.log('************************');
			console.log('*******You Won!!!*******');
			console.log('************************');
			console.log('');
			this.remainingGuesses = 10;
			this.underScoreArray = [];
			this.wrongLetters = [];
			console.log("---------------------------Press 'y' to play again!");
			return true;
			

		} if (this.remainingGuesses === 0) {
			// this.losses++;
			console.log('');
			console.log('-------------------------');
			console.log('-You ran out of guesses!-');
			console.log('-------------------------');
			console.log('');
			this.remainingGuesses = 10;
			this.underScoreArray = [];
			this.wrongLetters = [];
			console.log("---------------------------Press 'y' to play again!");
			return true;
					
		} 
	}
}

module.exports = letter;