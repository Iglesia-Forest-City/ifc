import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { colors, typography, vars } from './theme'

export const GlobalStyle = createGlobalStyle`
	${normalize()}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	body {
		background-color: ${colors.neutral.light};
		color: ${colors.neutral.dark};
		font-family: ${typography.primaryFont};
		height: 100%;
		margin: 0 auto;
		max-width: ${vars.desktopUpperBoundary}px;
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
