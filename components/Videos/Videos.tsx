import type { FC } from 'react'
import { CTA, GalleryWrapper, Title, VideoGallery, VideosSection } from './Videos.styles';
import type { YouTubeVideoSnippet } from 'services'
import { VideoItem } from 'components/VideoItem'
import { cleanVideoTitle } from 'utils';

export type VideosProps = {
	className?: string
	title: string
	videos: YouTubeVideoSnippet[]
	channelURL: string
}

export const Videos: FC<VideosProps> = ({ className, title, videos, channelURL }) => (
	<VideosSection>
		<Title className={className}>{title}</Title>
		<CTA href={channelURL}>Ver todos</CTA>
		{videos.length > 0 && (
			<VideoGallery>
				<GalleryWrapper itemsCount={videos.length}>
					{videos.map(({ resourceId, title, publishedAt, description }) => (
						<VideoItem
							key={resourceId.videoId}
							id={resourceId.videoId}
							title={cleanVideoTitle(title)}
							date={new Date(publishedAt).toLocaleDateString()}
							description={description}
						/>
					))}
				</GalleryWrapper>
			</VideoGallery>
		)}
	</VideosSection>
)
