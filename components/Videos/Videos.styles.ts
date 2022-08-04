import styled from 'styled-components'
import { dynamicComponent, Wrapper } from 'components/DynamicComponent'
import { sectionWrapper } from 'styles'
import { Link } from 'components/Link'

export const VideosSection = styled(dynamicComponent('section', true))`
	${sectionWrapper}
	padding: 4rem 2rem;

	${Wrapper} {
		align-items: start;
		display: grid;
		grid-template-areas: 'title'
			'gallery'
			'cta';

		${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
			grid-template-areas: 'title gallery'
			'cta gallery'
			'. gallery';
			grid-template-columns: 1fr 3fr;
			/* grid-template-rows: 1fr 1fr 12fr; */
			grid-template-rows: 1fr 1fr 3fr;
		}

		${({ theme }) => theme.mediaQueries.tabletLandscapeUp} {
			grid-template-columns: 3fr 7fr;
		}
	}
`

export const Title = styled.h2`
	font-family: ${({ theme }) => theme.typography.secondaryFont};
	font-size: 48px;
	font-weight: 900;
	grid-area: title;
	line-height: 1;
	margin: 0;
`

export const VideoGallery = styled.div`
	grid-area: gallery;
	margin: 0 -2rem;
	overflow-x: scroll;
	padding: 2rem 0;
	scroll-snap-type: x mandatory;

	${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
		padding: 0 0 2rem;
	}
`

interface GalleryWrapperProps {
	itemsCount: number
}

export const GalleryWrapper = styled.div<GalleryWrapperProps>`
	display: grid;
	grid-gap: 1em;
	grid-template-columns: repeat(auto-fit, minmax(176px, 1fr));
	padding: 0 2rem;
	width: calc(${({ itemsCount }) => itemsCount} * 100% - 16rem);

	${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
		max-width: calc(${({ itemsCount }) => itemsCount} * 50% - 16rem);
	}

	${({ theme }) => theme.mediaQueries.tabletLandscapeUp} {
		max-width: calc(${({ itemsCount }) => itemsCount} * 40% - 40rem);
	}

	& > div {
		scroll-snap-align: center;

		${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
			scroll-snap-align: start;
		}
	}
`

export const CTA = styled(Link)`
	grid-area: cta;
	justify-self: start;
`
