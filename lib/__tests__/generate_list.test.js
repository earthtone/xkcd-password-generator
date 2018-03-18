const test = require('tape');
const generateList = require('../generate_list');

test('Generate List', function(assert){
	{
		let message = 'returns array';
		let expected = true;
		let actual = Array.isArray(generateList());
		assert.equal(actual, expected, message);
	}

	{
		let list = generateList();
		let message = 'returns list of words';
		let expected = 'string';
		let actual = typeof list[Math.floor(Math.random()*list.length)];

		assert.equal(actual, expected, message);
	}
	
	{
		let message = 'returns list of four words';
		let expected = 4;
		let actual = generateList().length;

		assert.equal(actual, expected, message);
	}

	assert.end();
});
