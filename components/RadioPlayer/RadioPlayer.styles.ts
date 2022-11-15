import { dynamicComponent, Wrapper } from 'components/DynamicComponent'
import styled, { css, keyframes } from 'styled-components'
import { sectionWrapper } from 'styles'

export const WrappedPlayer = styled(dynamicComponent('section', true))`
	${sectionWrapper}
	background: ${({ theme }) => `linear-gradient(360deg, ${theme.colors.neutral.light} 70%, ${theme.colors.blue.semiDark} 170%);`};
	bottom: 0;
	color: ${({ theme }) => theme.colors.blue.semiDark};
	position: fixed;
	z-index: ${({ theme }) => theme.zIndex.header};

	${Wrapper} {
		align-items: center;
		display: grid;
		gap: 1em;
		grid-template-areas: 'logo controls metadata audience';
		grid-template-columns: 1fr 2fr 8fr 1fr;
		justify-content: space-between;
  	place-items: center;
	}
`

export const ControlButton = styled.button`
	appearance: none !important;
	background: none;
	border: none;
	color: inherit;
	cursor: pointer;
	font-size: 32px;
	line-height: 0;
	padding: 0;
	transition: ${({ theme }) => `color ${theme.vars.transitionTime}`};
`

const thumbStyles = css`
	appearance: none;
	background-color: ${({ theme }) => theme.colors.blue.semiDark};
	border-radius: 50%;
	cursor: pointer;
	height: 16px;
	width: 16px;
`

const trackStyles = css`
	background-color: ${({ theme }) => theme.colors.blue.semiDark}33;
	height: 4px;
	width: 100%;
`

export const VolumeSlider = styled.input`
	appearance: none;
	background: transparent;
	width: 100%;

	&::-webkit-slider-thumb {
		${thumbStyles}
		position: relative;
		top: 50%;
		transform: translateY(-50%)
	}

	&::-moz-range-thumb {
		${thumbStyles}
	}

	&::-ms-thumb {
		${thumbStyles}
	}

	&::-webkit-slider-runnable-track {
		${trackStyles}
	}

	&::-moz-range-track {
		${trackStyles}
	}

	&::-ms-track {
		background: transparent;
		border-color: transparent;
		color: transparent;
		cursor: pointer;
		width: 100%;
		${trackStyles}
	}
`

export const RadioLogo = styled.div`
	align-items: center;
	display: flex;
	grid-area: logo;
`

export const Controls = styled.div`
	align-items: center;
	display: flex;
	gap: 0.5em;
	grid-area: controls;
`

export const Metadata = styled.div`
	align-items: center;
	display: flex;
	gap: 0.5em;
	grid-area: metadata;
`

export const Title = styled.span`
	font-weight: 500;
`

export const Artist = styled.span`
	font-family: ${({ theme }) => theme.typography.secondaryFont};
`

type AudienceProps = {
	$isLive: boolean
}

const blink = keyframes`
	from {
		opacity: 0.2;
	}
	to {
		opacity: 1;
	}
`

const liveAnimation = css`
	animation: ${blink} 1s alternate-reverse ease-in-out infinite;
`

export const Audience = styled.div<AudienceProps>`
	${({ $isLive }) => $isLive ? liveAnimation : 'none'};
	align-items: center;
	display: flex;
	grid-area: audience;
	position: relative;
	opacity: ${({ $isLive }) => $isLive ? 1 : 0.5};
	transition: opacity ${({ theme }) => theme.vars.transitionTime};
`

export const AudienceNumber = styled.span`
	font-size: 8px;
	position: absolute;
	left: 50%;
	top: 90%;
	transform: translateX(-50%);
`