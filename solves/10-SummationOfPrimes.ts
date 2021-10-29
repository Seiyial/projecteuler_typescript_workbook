
/* 
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.



 */

const solution = () => {
	const primes: number[] = []
	let i = 2 // lowest prime
	let sum = 0
	while (i < 2000000) {
		const isPrime = primes.every((v) => i % v !== 0)
		if (isPrime) {
			console.log(`+ ${i}`)
			primes.push(i)
			sum += i
		}

		i++
	}

	return sum
}

export const solved: boolean = true

export default solution
