
/* 
A Pythagorean triplet is a set of three natural numbers, a &lt; b &lt; c, for which,
 a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.
There exists exactly one Pythagorean triplet for which a + b + c = 1000.Find the product abc.
 */

const solution = () => {
	let a = 1
	while (a < 998) {
		let b = a + 1
		while (b < 999) {
			let c = b + 1
			while (c < 1000) {
				if (a + b + c === 1000 && (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2))) {
					return a * b * c
				}
				c += 1
			}
			b += 1
		}
		a += 1
	}
	// we have a better solution but welp
	// while (a < 997) {
	// 	let b = a + 1
	// 	let c = 1000 - a - b
	// 	while (b < c) {

	// 	}
	// }

	const maxRange = 1000
	// a = 1, b = 2, c = 997
	// a = 1, b = 3, c = 996
	// ...
	// a = 2, b = 3
}

export const solved: boolean = true

export default solution
