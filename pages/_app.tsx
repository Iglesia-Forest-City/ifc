import { MutableRefObject, useRef } from 'react'
import type { AppProps } from 'next/app'
import styled, { ThemeProvider } from 'styled-components'
import { dynamicComponent, Header } from 'components'
import { GlobalStyle, theme } from 'styles'
import pkg from 'package.json'

type MainProps = {
	headerRef: MutableRefObject<Element>;
	headerIsFixed: boolean;
}

const Main = styled(dynamicComponent('main'))<MainProps>`
	margin-top: ${({ headerRef, headerIsFixed }) => headerIsFixed ? headerRef.current.clientHeight : 0}px;
`

const logAppVersion = () => console.log(
	`%c${pkg.description}, version: ${pkg.version}`,
	`background: ${theme.colors.neutral.dark};
		color: ${theme.colors.neutral.light};
		font-size: x-large;
		padding: 0.5em;`,
)

const App = ({ Component, pageProps }: AppProps) => {
	logAppVersion()
	const headerRef = useRef(null)
	const headerIsFixed = true

  return <>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header ref={headerRef} logo={pageProps.logo} logoAltText={pageProps.logoAltText} fixed={headerIsFixed} />
			<Main headerRef={headerRef} headerIsFixed={headerIsFixed}>
				<Component {...pageProps} />
			</Main>
		</ThemeProvider>
	</>
}

export default App
