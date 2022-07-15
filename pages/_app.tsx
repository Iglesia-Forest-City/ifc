import { useEffect, useRef, useState } from 'react'
import type { AppProps } from 'next/app'
import styled, { ThemeProvider } from 'styled-components'
import { dynamicComponent, Header } from 'components'
import { GlobalStyle, theme } from 'styles'
import pkg from 'package.json'

type MainProps = {
	$marginTop: number;
	$headerIsFixed?: boolean;
}

const Main = styled(dynamicComponent('main'))<MainProps>`
	margin-top: ${({ $marginTop, $headerIsFixed }) => $headerIsFixed ? $marginTop : 0}px;
`

const logAppVersion = () => console.log(
	`%c${pkg.description}, version: ${pkg.version}`,
	`background: ${theme.colors.neutral.dark};
		color: ${theme.colors.neutral.light};
		font-size: x-large;
		padding: 0.5em;`,
)

const App = ({ Component, pageProps }: AppProps) => {
	const headerRef = useRef<Element>(null)
	const [mainOffset, setMainOffset] = useState<number>()

	const headerIsFixed = pageProps?.fixedHeader

	useEffect(() => {
		logAppVersion()
		setMainOffset(headerRef.current?.clientHeight ?? 0)
	}, [])

  return <>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header ref={headerRef} logo={pageProps.logo} logoAltText={pageProps.logoAltText} fixed={headerIsFixed} />
			<Main $marginTop={mainOffset} $headerIsFixed={headerIsFixed}>
				<Component {...pageProps} />
			</Main>
		</ThemeProvider>
	</>
}

export default App
