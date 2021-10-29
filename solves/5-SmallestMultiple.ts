/**
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

const solution = () => {
	// 20 = 2 * 2 * 5
	// 19 = prime
	// 18 = 2 * 3 * 3
	// 17 = prime
	// 16 = 2 * 2 * 2 * 2
	// 15 = 3*5
	// 14 = 7*2
	// 13 = prime
	// 12 = 6*2
	// 11 = prime
	// 10 = 5*2
	// 9 = 3*3 (double 3)
	// 8 = 2*4
	// 7 = prime
	// 6 = 3*2
	// 5 = prime
	// 4 = 2*2 but covered by 4
	// 3 = prime
	// 2 = prime
	// 1 = prime

	// return 1 * Math.pow(2, 4) * Math.pow(3, 2) * 5 * 7 * 11 * 13 * 17 * 19

	// umm this took forever << BECAUSE YOU FORGOT TO PUT I+=1
	return getSmallestMultipleOfNumRange(1, 20)
}

const makeRange = (min: number, max: number): number[] => {
	const size = max - min + 1;
	return [...Array(size).keys()].map((i) => i + min)

	// input: 1, 3
	// output: [1, 2, 3]

	// input: 0, 19
	// output: [0..19]
}

const getSmallestMultipleOfNumRange = (min: number, max: number) => {
	const range = makeRange(min, max)
	const limit = range.reduce((acc, num) => num * acc, 1)
	let i = max
	while (i < limit) {
		process.stdout.write('.')
		if (range.every((factor) => i % factor === 0)) return i
		i += 1
	}
	console.log('could not find a value')
	return null
}

export default solution

export const solved: boolean = true
