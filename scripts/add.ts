import fsp from 'fs/promises'
import { parse as parseHTML } from 'node-html-parser'
import got from 'got'
import chalk from 'chalk'

const eulerURL = (num: string): string => `https://projecteuler.info/problem=${num}`

const getProblemURLAndNum = (url?: string): Promise<{ num: string, url: string }> => {
	if (url) {
		const arr = url.split('=')
		const problemNum: string = arr[arr.length - 1]
		return Promise.resolve({ num: problemNum, url: url })
	} else {
		return fsp.readFile('./setting/_current_n.txt', 'utf-8').then((str) => {
			const newNum = parseInt(str) + 1
			return ({ num: newNum.toString(), url: eulerURL(newNum.toString()) })
		})
	}
}

const add = async (inputURL: string) => {
	const { url, num } = await getProblemURLAndNum(inputURL)
	let problemName: null | string = null
	let writeContent = ''
	console.log(chalk.green.bold('Fetching next problem #'+num.toString()))
	const data = await got.get(url)
		.then((resp) => {
			if (resp.statusCode.toString().startsWith('2')) {
				return resp.body
			} else {
				throw 'Could not fetch page.'
			}
		})
	const doc = parseHTML(data)
	const titleDiv = doc.querySelector('#content > h2')
	if (titleDiv?.innerText) problemName = titleDiv.innerText.split(' ').map((x) => x.charAt(0).toUpperCase() + x.substring(1)).join('')

	const problemText = doc.querySelector('#content > div.problem_content')?.innerText

	writeContent = `
${problemText ? `/* ${problemText} */` : ''}

const solution = () => {

}

export const solved: boolean = false

export default solution
`
	const problemID = `${num}${problemName ? `-${problemName}` : ''}`
	const result = await fsp.writeFile(
		`./solves/${problemID}.ts`,
		writeContent
	)
	await fsp.writeFile('./setting/_current.ts', `export default '${problemID}'`)
	await fsp.writeFile('./setting/_current_n.txt', `${num}`)
	console.log(`${chalk.green('Ready!')} Open ${chalk.blue.bold(`solves/${problemID}.ts`)} to get started.`)
}

add(process.argv[2])
