import axios from 'axios'

export const trace = axios.create({
	baseURL: 'https://www.cloudflare.com/cdn-cgi/trace/',
})

const processData = (data: string) => {
	const items = data.matchAll(/(.+)=(.+)/g)
	const processedData: Record<string, string> = {}
	for (const item of items) {
		processedData[item[1]] = item[2]
	}
	return processedData
}

export const getCountry = async () => {
	try {
		const { data } = await trace.get('')
		const { loc } = processData(data)
		return loc
	} catch(err) {
		console.error(err)
	}
}
