import styled from 'styled-components'

export const Wrapper = styled.div`
	margin: 0 auto;
	max-width: ${({ theme }) => theme.vars.desktopUpperBoundary}px;
	padding: 1.2rem;
	width: 100%;

	${({ theme }) => theme.mediaQueries.desktopUp} {
		padding: 5rem;
	}
`
