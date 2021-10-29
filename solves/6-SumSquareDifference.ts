const solution = () => {
	return sumSqDiff(1, 100)
}
const sumSqDiff = (min: number, max: number): number => {
	let i = min
	let sumSq = 0
	let sum = 0
	while (i <= max) {
		console.log(`@ ${i}`)
		sum += i
		sumSq += Math.pow(i, 2)
		i += 1
	}
	return Math.abs(sumSq - Math.pow(sum, 2))
}

export default solution

export const solved: boolean = true
