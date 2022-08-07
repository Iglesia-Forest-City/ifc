import styled from 'styled-components'
import { dynamicComponent } from 'components'
import { sectionWrapper } from 'styles'
import { sectionTitle } from 'styles/global.styles'

type WelcomeSectionProps = {
	$backgroundImage: string
}

export const WelcomeSection = styled(dynamicComponent('section', true))<WelcomeSectionProps>`
	${sectionWrapper}
	background-image: linear-gradient(to right, ${({ theme }) => theme.colors.blue.semiDark}CC, ${({ theme }) => theme.colors.blue.semiDark}CC), url(${({ $backgroundImage }) => $backgroundImage});
	background-position: center;
	background-size: cover;
	color: ${({ theme }) => theme.colors.neutral.light};
	padding: 2rem;
	text-align: center;

	${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
		padding: 2rem 2rem 14rem;
	}
`

export const Title = styled.h2`
	${sectionTitle}
	color: inherit;
`

export const Text = styled.p`
	font-size: 16px;
	font-weight: 300;
	line-height: 26px;
	margin: 1em auto 0;
	max-width: 500px;
`
