import type { AxiosError } from 'axios'
import { youTube } from '../../services/externalData/youTube'
import type { YouTubeVideoSnippet, YouTubeDataResponse, YouTubeError } from '../../services/externalData/youTube.types'
import { getCalendarEvents } from '../../services/externalData/microsoftGraph'

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
		console.error(`Videos: ${(err as AxiosError<YouTubeError>).response.data.error.message}`)
		videos = []
	}
	return videos
}

export const getEvents = async (days: number) => {
	let events: {
		name: string,
		date: string
	}[]
	try {
		const { value } = await getCalendarEvents(days)
		events = value.map(({ subject, start }) => ({
			name: subject,
			date: start.dateTime,
		}))
		.sort((a, b) => (new Date(a.date) as never) - (new Date(b.date) as never)) ?? []
	} catch (err) {
		// eslint-disable-next-line no-console
		console.error(`Events: ${(err as AxiosError).message}`)
		events = []
	}
	return events
}
