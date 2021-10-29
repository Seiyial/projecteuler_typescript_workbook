
/*

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
 */
const isPalindrome = (str: string): boolean => str.split('').reverse().join('') === str
const max3dg = 999
const min3dg = 100
let largestPalindrome: number | null = null
const solution = () => {
	let d1 = max3dg
	while (d1 >= min3dg) {
		let d2 = max3dg
		while (d2 >= min3dg) {
			const product = (d1 * d2)
			if (isPalindrome(product.toString())) {
				console.log(`${d1} * ${d2} = ${product}`)
				if (!largestPalindrome || largestPalindrome < product) largestPalindrome = product
			}
			d2 -= 1
		}
		d1 -= 1
	}
	return largestPalindrome!
}

export default solution

export const solved: boolean = true
