import type { DefaultTheme } from 'styled-components'
import type { Colors, MediaQueries, Typography, Vars, ZIndex } from './theme.types'
import { Playfair_Display, Plus_Jakarta_Sans } from '@next/font/google'

const playfairDisplay = Playfair_Display({ subsets: ['latin']})
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const colors: Colors = {
	neutral: {
		dark: '#051923',
		light: '#FFFFFF',
	},
	blue: {
		dark: '#003554',
		semiDark: '#006494',
		semiLight: '#0582CA',
		light: '#00A6FB',
	},
}

export const typography: Typography = {
	primaryFont: plusJakartaSans.style.fontFamily,
	secondaryFont: playfairDisplay.style.fontFamily,
	typeScale: {
		h1: '1.8rem',
		h2: '1.6rem',
		h3: '1.4rem',
		h4: '1.2rem',
		h5: '1.1rem',
		h6: '1rem',
		paragraph: '1rem',
		helper: '0.8rem',
		copyright: '0.7rem',
	},
}

export const vars: Vars = {
	transitionTime: '0.3s',
	phoneUpperBoundary: 600,
	tabletPortraitUpperBoundary: 900,
	tabletLandscapeUpperBoundary: 1200,
	desktopUpperBoundary: 1400,
}

export const zIndex: ZIndex = {
	modal: 900,
	overlay: 800,
	dropdown: 700,
	header: 600,
	footer: 500,
	layer: 400,
}

// Based on https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/
export const mediaQueries: MediaQueries = {
	phoneOnly: `@media (max-width: ${vars.phoneUpperBoundary - 1}px)`,
	tabletPortraitUp: `@media (min-width: ${vars.phoneUpperBoundary}px)`,
	tabletLandscapeUp: `@media (min-width: ${vars.tabletPortraitUpperBoundary}px)`,
	desktopUp: `@media (min-width: ${vars.tabletLandscapeUpperBoundary}px)`,
	largeDesktop: `@media (min-width: ${vars.desktopUpperBoundary}px)`,
}

export const theme: DefaultTheme = {
	colors,
	mediaQueries,
	typography,
	vars,
	zIndex,
}
