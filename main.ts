import chalk from 'chalk'
import _current from './setting/_current'

const current = _current

console.log(chalk.blue.bold(`Solving Euler problem #${current.split('-').join(': ')}`))

import(`./solves/${current}`)
.then((solver) => {
	const coloring = solver.solved ? chalk.green.bold : chalk.yellow.bold
	console.log(coloring(`Answer: ${solver.default()}`))
})
