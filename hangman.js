const letter = require('./letter');
const inquirer = require('inquirer');

const Letter = new letter;

console.log('');
console.log('');
console.log('----------------------------------');
console.log('-------------Hangman--------------');
console.log('-------Harry Potter Edition-------');
console.log('----------------------------------');
console.log('');
console.log('');

// function asking the user if they want to play
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
		// if the user says yes the game is started by calling the other functions
		.then(function(userResponse) {
			if (userResponse.confirm) {
				
				function startGame() {
					Letter.chooseWord();
					Letter.showGame();
					userGuess();	
				}

				startGame();
				// takes the user's guess, makes sure its a letter and lowercase, and sends it to the check letter function
				function userGuess() {
					inquirer
						.prompt([
							{
								type: 'input',
								message: 'Guess a letter!',
								name: 'input',
								validate: function(input) {
									let letters = /^[a-zA-Z]+$/;
									if(input.match(letters) && input.length < 2) {
										return true;
									} else {
										console.log('Remember, no numbers and one letter at a time');
										return false;
									}
								},
								filter: function(input) {
									return input.toLowerCase();
								}
							},
						])
						// if check win is false, keep playing. When it is true, start the game over
						.then(function(userInput) {
							if (!Letter.checkWin()) {
								Letter.checkLetter(userInput);
								Letter.showGame();
								userGuess();
							} else {
								startGameConfirm();
							}
						}) 
				}

			// if the user does not want to play
			} else {
				console.log('oh ok');
			}
		})
};

startGameConfirm();