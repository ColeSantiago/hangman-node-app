const gameWords = ['delorean', 'einstein', 'plutonium', 'hoverboard', 'outatime', 'biff'];

const word = function(currentWord) {
		let remainingGuesses = 15;
		let wins = 0;
		let losses = 0;
		let underscoreArray = [];
		let currentWordLetters = [];

		currentWord = gameWords[Math.floor(Math.random() * gameWords.length)];
		currentWordLetters = currentWord.split ("");

		for (let i = 0; i < currentWordLetters.length; i++) {
			underscoreArray.push("_");
		}

			console.log(`Wins: ${wins}`);
			console.log(`Losses: ${losses}`);
			console.log(`Remaining Guesses: ${remainingGuesses}`);
			console.log(`Current Word: ${underscoreArray}`);

			console.log(currentWord);
		
}

module.exports = word;