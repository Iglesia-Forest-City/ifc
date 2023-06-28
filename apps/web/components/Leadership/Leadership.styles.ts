import styled from 'styled-components'
import { dynamicComponent } from 'components'
import { sectionTitle, sectionWrapper } from 'styles'

export const LeadershipSection = styled(dynamicComponent('section', true))`
	${sectionWrapper}
	padding: 5.5rem 2rem;
`

export const Title = styled.h2`
	${sectionTitle}
	margin-bottom: 2em;
`

export const Leaders = styled.div`
	margin: 0 -2rem;
  overflow-x: scroll;
  padding: 2rem 0;
	scroll-snap-type: x mandatory;
`

interface LeadersWrapperProps {
	$itemsCount: number
}

export const LeadersWrapper = styled.div<LeadersWrapperProps>`
	display: grid;
	gap: 1em;
	grid-template-columns: repeat(auto-fit, minmax(176px, 1fr));
	padding: 0 2rem;
	width: calc(${({ $itemsCount }) => $itemsCount} * 100% - 8rem);

	${({ theme }) => theme.mediaQueries.tabletLandscapeUp} {
		max-width: calc(${({ $itemsCount }) => $itemsCount} * 25%);
	}

	& > article {
		scroll-snap-align: center;

		${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
			scroll-snap-align: start;
		}
	}
`

export const Leader = styled.article`
	color: ${({ theme }) => theme.colors.neutral.light};
	display: grid;
	grid-template-rows: min-content;
`

const frameBorderWidth = '3px'

export const ImageWrapper = styled.figure`
	aspect-ratio: 0.927;
	margin: 0;
	position: relative;
	z-index: 0;

	& > img {
		transform: scale(1.1);
		vertical-align: middle;
	}

	&::after {
		border: ${frameBorderWidth} solid ${({ theme }) => theme.colors.blue.light};
		bottom: -${frameBorderWidth};
		content: '';
		left: 1.5em;
		position: absolute;
		right: 1.5em;
		top: 1.5em;
		z-index: -1;
	}
`

export const BioWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.blue.light};
	padding: 2em 1.5em;
	z-index: 1;
`

export const Name = styled.h3`
	font-family: ${({ theme }) => theme.typography.secondaryFont};
	font-size: 24px;
	font-weight: 900;
	margin: 0 auto;
	text-align: center;
`

export const Role = styled.h4`
	font-size: 16px;
	font-style: italic;
	font-weight: normal;
	margin: 0.25em auto;
	text-align: center;
`

export const Bio = styled.p`
	font-size: 16px;
	font-weight: 300;
	margin: 2em 0 0;
	text-align: left;
`
