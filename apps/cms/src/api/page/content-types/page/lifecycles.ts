import { asyncForEach } from '../../../../utils'
import { getEvents, getPlaylist } from './functions'

type Section = {
	__component: string
	id: number
}

type VideosSection = Section & {
	title: string
	sectionID: string
	playlistID: string
	videos: unknown
}

type EventsSection = Section & {
	title: string
	sectionID: string
	days: number
	events: unknown
}

export default {
	async afterFindOne({ result }) {
		if (result) {
			const { sections }: { sections: Section[] } = result
			const videosSections = sections?.filter((section) => section.__component === 'sections.videos')
			const eventsSections = sections?.filter((section) => section.__component === 'sections.events')

			videosSections &&
				(await asyncForEach(videosSections, async (section: VideosSection) => {
					const videos = await getPlaylist(section.playlistID)
					section.videos = videos
				}))

			eventsSections &&
				(await asyncForEach(eventsSections, async (section: EventsSection) => {
					const events = await getEvents(section.days)
					section.events = events
				}))
		}
	},
}
