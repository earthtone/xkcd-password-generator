// Generate a new passphrase and update the document:
import createHash from './create_hash'
import { words as wordList } from './word_list.json'

const random = Math.floor(Math.random() * 0x100000000)

export default function generateList (length = 4, list = wordList) {
  const hash = createHash()
  return Array.from({ length }).map((_, i) => {
    const index = ((random ^ hash[i]) + 0x100000000) % list.length
    return list[index]
  })
}
