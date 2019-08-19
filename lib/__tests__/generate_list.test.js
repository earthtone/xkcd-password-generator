import test from 'ava'
import generateList from '../generate_list'

test('Generate List', function (assert) {
  {
    const message = 'returns array'
    const expected = true
    const actual = Array.isArray(generateList())
    assert.is(actual, expected, message)
  }

  {
    const list = generateList()
    const message = 'returns list of words'
    const expected = 'string'
    const actual = typeof list[Math.floor(Math.random() * list.length)]

    assert.is(actual, expected, message)
  }

  {
    const message = 'returns list of four words'
    const expected = 4
    const actual = generateList().length

    assert.is(actual, expected, message)
  }
})
