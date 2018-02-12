const letter = require('./letter');
const Letter = new letter;
const inquirer = require('inquirer');

console.log('');
console.log('');
console.log('----------------------------------');
console.log('-------------Hangman--------------');
console.log('----Back to the Future Edition----');
console.log('----------------------------------');
console.log('');
console.log('');

function startGameConfirm() {
	inquirer
		.prompt([
			{
				type: 'confirm',
				message: 'Start?',
				name: 'confirm',
				default: true

			},
		])
		.then(function(userResponse) {
			if (userResponse.confirm) {

				function startGame() {
					let theWord = Letter.getWord();

					Letter.showGame();

					Letter.checkLetter(theWord);	
				}

				startGame();


			} else {
				console.log('oh ok');
			}
		})
}

startGameConfirm();
