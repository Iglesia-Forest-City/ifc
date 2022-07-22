import { css, createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
	${normalize()}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	body {
		background-color: ${({ theme }) => theme.colors.neutral.light};
		color: ${({ theme }) => theme.colors.neutral.dark};
		font-family: ${({ theme }) => theme.typography.primaryFont};
		height: 100%;
		margin: 0 auto;
		max-width: ${({ theme }) => theme.vars.desktopUpperBoundary}px;
		min-height: 100vh;
		-webkit-font-smoothing: antialiased;
	}

	figure {
		text-align: center;
	}

	footer {
		grid-area: footer;
	}

	header {
		grid-area: header;
	}

	html {
		scroll-behavior: smooth;
	}

	img {
		max-width: 100%;
		vertical-align: middle;
	}

	main {
		grid-area: main;
	}

	#__next {
		display: grid;
		grid-template-areas:
			'header'
			'main'
			'footer';
	}
`

export const sectionWrapper = css`
	max-width: ${({ theme }) => theme.vars.desktopUpperBoundary}px;
	padding: 1rem 2rem;
	width: 100%;
`
