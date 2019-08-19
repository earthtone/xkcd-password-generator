#!/usr/bin/env node
import chalk from 'chalk'
import generateList from '../lib/generate_list'

const list = generateList()
console.log(`${chalk.cyan(list[0])} ${chalk.yellow(list[1])} ${chalk.red(list[2])} ${chalk.green(list[3])}`)
