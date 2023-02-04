import styled from 'styled-components'
import { dynamicComponent, Wrapper } from 'components'
import { sectionTitle, sectionWrapper } from 'styles'

export const SocialNetworksSection = styled(dynamicComponent('section', true))`
	${sectionWrapper}
	background-color: ${({ theme }) => theme.colors.blue.light};
	color: ${({ theme }) => theme.colors.neutral.light};
	padding: 4rem 2rem;

	${Wrapper} {
		display: grid;
		gap: 2em;
  	place-items: center;

		${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
			grid-template-columns: 1fr 1fr;
			justify-content: space-between;
		}
	}
`

export const Title = styled.h2`
	${sectionTitle}
	color: ${({ theme }) => theme.colors.neutral.light};
	line-height: 1;
	text-align: left;
`

export const Networks = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
`

export const Network = styled.a`
	color: inherit;
	font-size: 80px;
`
