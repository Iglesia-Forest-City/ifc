import { asyncForEach } from '../../../../utils'
import { getPlaylist } from './functions'

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

export default {
	async afterFindOne({ result }) {
		const { sections }: { sections: Section[] } = result
		const videosSections = sections?.filter(section => section.__component === 'sections.videos')

		videosSections && await asyncForEach(videosSections, async (section: VideosSection) => {
			const videos = await getPlaylist(section.playlistID)
			section.videos = videos;
		});
	}
}
