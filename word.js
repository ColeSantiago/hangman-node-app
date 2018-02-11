const gameWords = ['delorean', 'einstein', 'plutonium', 'hoverboard', 'outatime', 'biff'];

const word = function() {
		let remainingGuesses = 15;
		this.underscoreArray = [];
		this.currentWordLetters = [];
		this.wrongLetters = [];

		this.currentWord = gameWords[Math.floor(Math.random() * gameWords.length)];
		currentWordLetters = this.currentWord.split ("");

		for (let i = 0; i < currentWordLetters.length; i++) {
			underscoreArray.push("_");
		}
			console.log(`Remaining Guesses: ${remainingGuesses}`);
			console.log(`Current Word: ${underscoreArray}`);

			console.log(this.currentWord);

		this.checkLetter = function(letter) {
			if (this.currentWordLetters.indexOf(letter) === -1 && this.wrongLetters.indexOf(letter) === -1) {
						this.wrongLetters.push(letter);
						this.remainingGuesses--;
						// checkWin();				
			} else {

				for (let i = 0; i < this.currentWordLetters.length; i++) {

					if (letter === this.currentWordLetters[i] && this.underscoreArray.indexOf(letter) === -1) {
						this.underscoreArray[i] = letter;
						this.remainingGuesses--;
						// checkWin();		
					}

					if (this.wrongLetters[i] == letter) {
						this.remainingGuesses + 0;
					}
				}	
			}
		}
	}

module.exports = word;