import { SiSpotify, SiApplepodcasts, SiGooglepodcasts, SiCastbox } from 'react-icons/si'
import { PodcastSection, Source, Sources, Title } from './Podcast.styles'

export type PodcastProps = {
	className?: string
	title: string
	spotifyURL: string
	applePodcastsURL: string
	googlePodcastsURL: string
	castboxURL: string
}

export const Podcast = ({ className, title, spotifyURL, applePodcastsURL, googlePodcastsURL, castboxURL }: PodcastProps) => {
	return (
		<PodcastSection className={className}>
			<Title className={className}>{title}</Title>
			<Sources>
				<Source
					href={spotifyURL}
					target="_blank"
					rel="noopener noreferer"
				><SiSpotify /></Source>
				<Source
					href={applePodcastsURL}
					target="_blank"
					rel="noopener noreferer"
				><SiApplepodcasts /></Source>
				<Source
					href={googlePodcastsURL}
					target="_blank"
					rel="noopener noreferer"
				><SiGooglepodcasts /></Source>
				<Source
					href={castboxURL}
					target="_blank"
					rel="noopener noreferer"
				><SiCastbox /></Source>
			</Sources>
		</PodcastSection>
	)
}
