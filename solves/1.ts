const solution = () => {
	let sum: number = 0
	let i = 1
	while (i < 1000) {
		if (i % 3 === 0 || i % 5 === 0) sum += i
		i++
	}
	return sum
}

export default solution

export const solved: boolean = true
