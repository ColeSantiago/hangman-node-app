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
										return false;
									}
								},
								filter: function(input) {
									return input.toLowerCase();
								}

							},
						])
						.then(function(userInput) {
							Letter.checkLetter(userInput);
							startGame();

						})
				}

			// if the user does not want to play
			} else {
				console.log('oh ok');
			}
		})
}

if (Letter.gameOver()) {
	console.log('this is working')
	startGameConfirm();
}



startGameConfirm();
