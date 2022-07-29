import { FC } from 'react'
import { Title, VideoDate, VideoDescription, VideoDetails, VideoWrapper } from './VideoItem.styles'

import { YouTubeVideo as Video } from 'components'

export type VideoItemProps = {
	className?: string
	id: string
	title: string
	date: string
	description: string
}

export const VideoItem: FC<VideoItemProps> = ({ className, id, title, date, description }) => {
	return (
		<VideoWrapper>
			<Video key={id} id={id} title={title} />
			<VideoDetails
				href={`https://www.youtube.com/watch?v=${id}`}
				target="_blank"
				rel="noopener noreferer"
			>
				<Title>{title}</Title>
				<VideoDate>{date}</VideoDate>
				<VideoDescription>{description}</VideoDescription>
			</VideoDetails>
		</VideoWrapper>
	)
}
