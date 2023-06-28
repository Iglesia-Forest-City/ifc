import type { AxiosError } from 'axios'
import { youTube } from '../../services/externalData/youTube'
import type { YouTubeVideoSnippet, YouTubeDataResponse } from '../../services/externalData/youTube.types'

export const getPlaylist = async (playlistID: string) => {
	let videos: YouTubeVideoSnippet[]
	try {
		const { data } = await youTube.get<YouTubeDataResponse>('/playlistItems', {
			params: {
				playlistId: playlistID,
				maxResults: 10,
			},
		})
		videos = data.items.map(({ snippet }) => snippet)
	} catch (err) {
		console.error(`Videos: ${(err as AxiosError).message}`)
		videos = []
	}
	return videos
}
