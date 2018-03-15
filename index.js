//-------------------------------------------------------------------
// Copyright (c) 2011, Jeff Preshing
// http://preshing.com/20110811/xkcd-password-generator
// All rights reserved.
//
// Some parts based on http://www.mytsoftware.com/dailyproject/PassGen/entropy.js, copyright 2003 David Finch.
// 
// Released under the Modified BSD License:
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the <organization> nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//-------------------------------------------------------------------
// Original Comic: https://imgs.xkcd.com/comics/password_strength.png
// Original Concept: http://preshing.com/20110811/xkcd-password-generator/ku

const createHash = require('./lib/create_hash');
const { words: wordList } = require('./lib/word_list.json');

function generateList() {
	var hash = createHash();
	var choices = [];
	for (let i = 0; i < 4; i++) {
		var jsRandom = Math.floor(Math.random() * 0x100000000);
		var index = ((jsRandom ^ hash[i]) + 0x100000000) % wordList.length;
		choices.push(wordList[index]);
	}

	return choices;
}

var list = generateList();
console.log(list);
