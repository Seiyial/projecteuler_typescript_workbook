const solution = () => {
	let count = 0
	const primes: number[] = []
	let i = 2 // first prime number
	while (count <= 10001) {
		const isPrime = primes.every((prime) => i % prime !== 0)
		if (isPrime) {
			primes.push(i)
			count += 1
			console.log(`${i}... (#${count})`)
		}
		if (count === 10001) return i
		i += 1
	}
}

export default solution

export const solved: boolean = true
