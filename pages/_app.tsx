import { useEffect } from 'react'
import type { AppProps as NextAppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { dynamicComponent, Header } from 'components'
import { GlobalStyle, theme } from 'styles'
import pkg from 'package.json'

type AppProps<P = unknown> = {
	pageProps: P
} & Omit<NextAppProps<P>, 'pageProps'>

type CommonProps = {
	header: {
		logo: string
		logoAltText: string
		fixedHeader: boolean
		donationsURL: string
		donationsURLInternational: string
	},
}

const Main = dynamicComponent('main')

const logAppVersion = () => console.log(
	`%c${pkg.description}, version: ${pkg.version}`,
	`background: ${theme.colors.neutral.dark};
		color: ${theme.colors.neutral.light};
		font-size: x-large;
		padding: 0.5em;`,
)

const App = ({ Component, pageProps }: AppProps<CommonProps>) => {
	useEffect(() => {
		logAppVersion()
	}, [])

  return <>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header
				logo={pageProps.header?.logo}
				logoAltText={pageProps?.header?.logoAltText}
				fixed={pageProps.header?.fixedHeader}
				donationsURL={pageProps?.header?.donationsURL}
				donationsURLInternational={pageProps?.header?.donationsURLInternational}
			/>
			<Main>
				<Component {...pageProps} />
			</Main>
		</ThemeProvider>
	</>
}

export default App
