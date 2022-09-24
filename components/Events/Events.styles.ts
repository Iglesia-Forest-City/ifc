import styled from 'styled-components'
import { dynamicComponent } from 'components/DynamicComponent'
import { sectionTitle, sectionWrapper } from 'styles/global.styles'

export const EventsSection = styled(dynamicComponent('section', true))`
	${sectionWrapper}
	background-color: ${({ theme }) => theme.colors.blue.light}33;
	padding: 2rem 2rem 4rem;
`

export const Title = styled.h2`
	${sectionTitle}
	margin-bottom: 1em;
	text-align: left;
`

export const EventsWrapper = styled.div`
	display: grid;
	gap: 1em;

	${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
		grid-template-columns: 1fr 1fr;
	}
`
