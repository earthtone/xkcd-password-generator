// Generate a new passphrase and update the document:
const createHash = require('./create_hash');
const { words: wordList } = require('./word_list.json');

module.exports = function generateList() {
	var hash = createHash();
	var choices = [];
	for (let i = 0; i < 4; i++) {
		var jsRandom = Math.floor(Math.random() * 0x100000000);
		var index = ((jsRandom ^ hash[i]) + 0x100000000) % wordList.length;
		choices.push(wordList[index]);
	}

	return choices;
}
