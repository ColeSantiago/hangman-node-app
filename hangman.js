const inquirer = require('inquirer');
const word = require('./word');

console.log('');
console.log('');
console.log('----------------------------------');
console.log('-------------Hangman--------------');
console.log('----Back to the Future Edition----');
console.log('----------------------------------');
console.log('');
console.log('');


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
			word();

			inquirer
				.prompt([
					{
						type: 'input',
						message: 'Guess a letter!',
						name: 'input'
					}
				])
				.then(function(userGuess) {
					const newGuess = new word;
					newGuess.checkLetter(userGuess.input);
				})
		} else {
			console.log('ok then');
		}
	});