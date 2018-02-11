const word = require('./word');

function checkLetters (letter) {
		
	if (currentWordLetters.indexOf(letter) === -1 && wrongLetters.indexOf(letter) === -1) {
		wrongLetters.push(letter);
		remainingGuesses--;
		// checkWin();
						
	} else {

		for (let i = 0; i < currentWordLetters.length; i++) {

			if (letter === currentWordLetters[i] && underscoreArray.indexOf(letter) === -1) {
				underscoreArray[i] = letter;
				remainingGuesses--;
				// checkWin();		
			}

			if (wrongLetters[i] == letter) {
						remainingGuesses + 0;
			}
		}	
	}
}

module.exports = checkLetters;