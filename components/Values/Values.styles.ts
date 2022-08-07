import styled from 'styled-components'
import { dynamicComponent } from 'components/DynamicComponent'
import { sectionWrapper } from 'styles'
import { sectionTitle } from 'styles/global.styles'

export const Title = styled.h2`
	${sectionTitle}
`

export const Value = styled.p`
	font-family: ${({ theme }) => theme.typography.secondaryFont};
	font-size: 84px;
	font-weight: 900;
	line-height: 0.8;
	margin: 0.1em 0;
	word-break: break-word;

	${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
		font-size: 190px;
	}

	${({ theme }) => theme.mediaQueries.tabletLandscapeUp} {
		font-size: 280px;
	}

	${({ theme }) => theme.mediaQueries.desktopUp} {
		font-size: 350px;
	}
`

export const ValuesSection = styled(dynamicComponent('section', true))`
	${sectionWrapper}
	padding: 5.5rem 2rem;

	${Value} {
		&:nth-child(n + 1) {
			color: ${({ theme }) => theme.colors.blue.light};
		}
		&:nth-child(2n + 1) {
			color: ${({ theme }) => theme.colors.blue.semiLight};
		}
		&:nth-child(3n + 1) {
			color: ${({ theme }) => theme.colors.blue.semiDark};
		}
		&:nth-child(4n + 1) {
			color: ${({ theme }) => theme.colors.blue.dark};
		}
	}
`
