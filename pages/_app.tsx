import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { dynamicComponent, Header } from 'components'
import { GlobalStyle, theme } from 'styles'
import pkg from 'package.json'

const Main = dynamicComponent('main')

const logVersion = () => console.log(
	`%c${pkg.description}, version: ${pkg.version}`,
	`background: ${theme.colors.neutral.dark};
		color: ${theme.colors.neutral.light};
		font-size: x-large;
		padding: 0.5em;`,
)

const App = ({ Component, pageProps }: AppProps) => {
	logVersion()

  return <>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header logo={pageProps.logo} logoAltText={pageProps.logoAltText} />
			<Main>
				<Component {...pageProps} />
			</Main>
		</ThemeProvider>
	</>
}

export default App
