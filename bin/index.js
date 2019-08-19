#!/usr/bin/env node
const chalk = require('chalk')
const generate = require('./lib')

// generate function is packaged by
// rollup and transpiled into lib file
// allowing cli functionality and
// module functionality to stay separate

const list = generate()
console.log(`${chalk.cyan(list[0])} ${chalk.yellow(list[1])} ${chalk.red(list[2])} ${chalk.green(list[3])}`)
