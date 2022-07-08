import styled from 'styled-components'
import { dynamicComponent, Wrapper } from 'components'
import Link from 'next/link'

export const WrappedHeader = styled(dynamicComponent('header', true))`
	background-color: ${({ theme }) => theme.colors.blue.dark};
	max-width: ${({ theme }) => theme.vars.desktopUpperBoundary}px;
	padding: 1rem 2rem;
	position: fixed;
	width: 100%;
	z-index: ${({ theme }) => theme.zIndex.header};

	${Wrapper} {
		display: grid;
		gap: 1em;
		grid-template-areas: 'logo . menu actions';
		padding: 0;
  	place-items: center;
		width: 100%;
	}
`

export const Logo = styled.div`
	grid-area: logo;
	justify-self: start;
`

export const Actions = styled.div`
	display: grid;
	gap: 1em;
	grid-area: actions;
	grid-template-columns: 1fr auto;
	justify-self: end;
`
