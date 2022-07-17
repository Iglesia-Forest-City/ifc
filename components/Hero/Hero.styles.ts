import { linearGradient } from 'polished'
import { dynamicComponent, Wrapper } from 'components'
import styled from 'styled-components'
import { sectionWrapper } from 'styles'

export const HeroSection = styled.section`
	color: ${({ theme }) => theme.colors.neutral.light};
	position: relative;
`

export const Video = styled.video`
  height: 100%;
  left: 0;
	object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
	z-index: -9;
`

export const WrappedHero = styled(dynamicComponent('div', true))`
	${sectionWrapper}
	${({ theme }) => linearGradient({
		colorStops: [
			`${theme.colors.blue.semiDark} 10%`,
			`${theme.colors.blue.semiDark}DF 46.43%`,
			`${theme.colors.blue.semiDark}00 92.55%`
		],
		toDirection: 'to right',
		fallback: 'transparent',
	})}
	padding: 6rem 2rem 7rem;

	${Wrapper} {
		padding: 0;
	}
`

export const Title = styled.h1`
	font-family: ${({ theme }) => theme.typography.secondaryFont};
	font-size: 72px;
	font-weight: 900;
	line-height: 80px;
	margin: 0;
	max-width: 536px;
`

export const Text = styled.p`
	font-family: ${({ theme }) => theme.typography.primaryFont};
	font-size: 16px;
	font-weight: 300;
	line-height: 26px;
	margin: 1.5em 0;
	max-width: 390px;
`
