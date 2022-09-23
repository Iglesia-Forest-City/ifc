import { css, createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
	${normalize()}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	a {
		color: ${({ theme }) => theme.colors.blue.light};
		transition: color ${({ theme }) => theme.vars.transitionTime };

		&:hover {
			color: ${({ theme }) => theme.colors.blue.semiDark};
		}
	}

	body {
		background-color: ${({ theme }) => theme.colors.neutral.light};
		color: ${({ theme }) => theme.colors.blue.semiDark};
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

	ul {
		padding-left: 1.5em;
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

export const sectionTitle = css`
	color: ${({ theme }) => theme.colors.blue.semiDark};
	font-family: ${({ theme }) => theme.typography.secondaryFont};
	font-size: 48px;
	line-height: 56px;
	margin: 0 auto;
	text-align: center;
`
