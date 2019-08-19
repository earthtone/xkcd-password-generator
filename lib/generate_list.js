// Generate a new passphrase and update the document:
const createHash = require('./create_hash');
const { words: wordList } = require('./word_list.json');

const random = Math.floor(Math.random() * 0x100000000);

module.exports = function generateList (length = 4, list = wordList) {
  const hash = createHash()
  return Array.from({ length }).map((_, i) => {
    const index = (( random ^ hash[i]) + 0x100000000) % list.length
    return list[index]
  })
}
