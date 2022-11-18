import { dynamicComponent, Wrapper } from 'components/DynamicComponent'
import styled from 'styled-components'
import { sectionWrapper, sectionTitle } from 'styles'

export const StyledFooter = styled(dynamicComponent('footer', true))`
	${sectionWrapper}
	background-color: ${({ theme }) => theme.colors.blue.light}33;
	padding: 2rem 2rem 8rem;

	${Wrapper} {
		display: grid;
		gap: 2em;
		grid-template-areas: 'title'
			'form'
			'info'
			'copyright';
		${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
			grid-template-areas: 'title title'
				'info form'
				'copyright copyright';
			grid-template-columns: 1fr 1fr;
		}
	}
`

export const Title = styled.h2`
	${sectionTitle}
	grid-area: title;
	margin-bottom: 1em;

	${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
		text-align: left;
	}
`

export const ContactFormWrapper = styled.div`
	grid-area: form;
`

export const InfoWrapper = styled.div`
	grid-area: info;
`

export const Copyright = styled.div`
	border-top: 2px solid ${({ theme }) => theme.colors.blue.light }80;
	grid-area: copyright;
	padding-top: 1em;
`
