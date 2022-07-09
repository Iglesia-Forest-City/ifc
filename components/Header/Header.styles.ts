import styled from 'styled-components'
import { transitions } from 'polished'
import { dynamicComponent, Wrapper } from 'components'

export const WrappedHeader = styled(dynamicComponent('header', true))`
	background-color: ${({ theme }) => theme.colors.blue.dark};
	max-width: ${({ theme }) => theme.vars.desktopUpperBoundary}px;
	padding: 1rem 2rem;
	position: ${({ isFixed }) => isFixed ? 'fixed' : 'static'};
	width: 100%;
	z-index: ${({ theme }) => theme.zIndex.header};

	${Wrapper} {
		display: grid;
		gap: 1em;
		grid-template-areas: 'logo menu';
		justify-content: space-between;
		padding: 0;
  	place-items: center;
		width: 100%;
	}
`

export const Logo = styled.div`
	grid-area: logo;
`

export const Nav = styled.nav`
	grid-area: menu;
`

export const Ul = styled.ul`
	align-items: center;
	display: grid;
	gap: 1em;
	grid-auto-columns: 1fr;
	grid-auto-flow: column;
	margin: 0;
	padding: 0;
`

export const Li = styled.li`
	display: grid;
`

export const A = styled.a`
	color: ${({ theme }) => theme.colors.neutral.light};
	font-weight: bold;
	text-align: center;
	text-decoration: none;
	${({ theme }) => transitions(['color'], theme.vars.transitionTime)};

	&:hover {
		color: ${({ theme }) => theme.colors.blue.light};
	}
`
