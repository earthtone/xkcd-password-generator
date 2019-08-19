#!/usr/bin/env node
const chalk = require('chalk')
const generate = require('./lib')
// const generateList = require('../lib/generate_list')
const list = generate()

console.log(`${chalk.cyan(list[0])} ${chalk.yellow(list[1])} ${chalk.red(list[2])} ${chalk.green(list[3])}`)
