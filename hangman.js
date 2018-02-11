const inquirer = require('inquirer');
const word = require('./word');
const checkLetter = require('./letter');

console.log('');
console.log('');
console.log('----------------------------------');
console.log('-------------Hangman--------------');
console.log('----Back to the Future Edition----');
console.log('----------------------------------');
console.log('');
console.log('');


const game = inquirer
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
						word();

						inquirer
							.prompt([
								{
									type: 'input',
									message: 'Guess a letter!',
									name: 'input'

								},
							])
							.then(function(letter) {
								checkLetter(letter.input);
								console.log(`Remaining Guesses: ${remainingGuesses}`);
								console.log(`Current Word: ${underscoreArray}`);

							})
					} else {
						console.log('ok then');
					}
				});

