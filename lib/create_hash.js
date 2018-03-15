// Return a pseudorandom array of four 32-bit integers:

const crypto = require('crypto');

module.exports = function createHash(){
	var shasum = crypto.createHash('sha1');
	shasum.update(crypto.randomBytes(512));

	var result = [];
	var hexstring = shasum.digest('hex');

	for(let i = 0; i < 32; i += 8){
		result.push(parseInt(hexstring.substr(i, 8), 16));
	} 

	return result;
}