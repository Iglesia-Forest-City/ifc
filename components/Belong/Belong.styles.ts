import styled from 'styled-components'
import { dynamicComponent } from 'components/DynamicComponent'
import { sectionWrapper, sectionTitle } from 'styles'

export const BelongSection = styled(dynamicComponent('section', true))`
	${sectionWrapper}
	padding: 5.5rem 2rem;
`

export const Title = styled.h2`
	${sectionTitle}
	margin-bottom: 1em;

	${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
		margin-bottom: 2em;
	}
`

const Subsection = styled.article`
	display: grid;
	grid-template-areas: 'picture'
	'content';

	${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
		align-items: center;
		gap: 4em;
	}
`

export const Support = styled(Subsection)`
	${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
		grid-template-areas: 'content picture';
		grid-template-columns: 6fr 7fr;
		margin-bottom: 6rem;
	}
`

export const Offerings = styled(Subsection)`
	${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
		grid-template-areas: 'picture content';
		grid-template-columns: 7fr 6fr;
	}
`

export const Content = styled.div`
	grid-area: content;
`

export const Subtitle = styled.h3`
	font-family: ${({ theme }) => theme.typography.secondaryFont};
	font-size: 32px;
	font-weight: 900;
`

export const Text = styled.div`
	color: ${({ theme }) => theme.colors.neutral.dark};
	font-size: 16px;

	h3 {
		color: ${({ theme }) => theme.colors.blue.semiDark};
	}

	li {
		margin-bottom: 1em;
	}

	p {
		line-height: 1.5;
		margin-bottom: 2em;
	}
`

export const Picture = styled.figure`
	grid-area: picture;
	margin: 0 -2rem;

	${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
		margin: 0;
	}
`
