import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { dynamicComponent } from 'components'
import { GlobalStyle, theme } from 'styles'

const Main = dynamicComponent('main')

const App = ({ Component, pageProps }: AppProps) => {
  return <>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Main>
				<Component {...pageProps} />
			</Main>
		</ThemeProvider>
	</>
}

export default App
