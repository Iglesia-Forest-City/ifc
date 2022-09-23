import { CTA, GalleryWrapper, Title, VideoGallery, VideosSection } from './Videos.styles';
import type { YouTubeVideoSnippet } from 'services'
import { VideoItem } from 'components/VideoItem'
import { cleanVideoTitle, formatDate } from 'utils';

export type VideosProps = {
	className?: string
	id: string
	title: string
	videos: YouTubeVideoSnippet[]
	channelURL: string
}

export const Videos = ({ className, id, title, videos, channelURL }: VideosProps) => (
	<VideosSection id={id}>
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
							date={formatDate(new Date(publishedAt))}
							description={description}
						/>
					))}
				</GalleryWrapper>
			</VideoGallery>
		)}
	</VideosSection>
)
