import test from 'ava'
import generateList from '../generate_list'

const randomIndexFrom = ls => Math.floor(Math.random() * ls.length)

test('Generated List is an array', assert => {
  const expected = true
  const actual = Array.isArray(generateList())
  assert.is(actual, expected)
})

test('Generated List is an array of strings', assert => {
  const list = generateList()
  const expected = 'string'
  const actual = typeof list[randomIndexFrom(list)]
  assert.is(actual, expected)
})

test('Generated List has default length of 4', assert => {
  const expected = 4
  const actual = generateList().length
  assert.is(actual, expected)
})

test('Generated List has optional length argument', assert => {
  const ln = 3

  const expected = ln
  const actual = generateList(ln).length
  assert.is(actual, expected)
})

test('Generated List has optional list argument', assert => {
  const ln = 3
  const ls = ['foo', 'bar', 'baz']

  const genList = generateList(ln, ls)

  const expected = true
  const actual = ls.includes(genList[randomIndexFrom(genList)])
  assert.is(actual, expected)
})
