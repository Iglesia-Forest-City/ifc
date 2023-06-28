import axios from 'axios'

export const youTube = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	headers: {
		'Accept-Encoding': 'gzip',
	},
})

youTube.interceptors.request.use((config) => {
	const params = {
		part: 'snippet',
		...config.params,
		key: process.env.YOUTUBE_API_KEY,
	}
	return { ...config, params }
})
