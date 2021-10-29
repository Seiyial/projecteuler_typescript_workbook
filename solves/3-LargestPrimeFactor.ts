// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const largestPrimeFactor = (inputNumber: number): number => {
	let i = 2 // prime increment
	let num = inputNumber
	let largestPrimeFactor: number = 1
	while (i <= num) {
		console.log(i, num)
		if (num % i === 0) {
			console.log(i)
			largestPrimeFactor = i
			num /= i
		}
		if (num === 1) break
		i += 1
	}
	return largestPrimeFactor
}

const solution = () => largestPrimeFactor(600851475143)

export default solution

export const solved: boolean = true
