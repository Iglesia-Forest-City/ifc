import { useEffect } from 'react'
import type { AppProps as NextAppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { ThemeProvider } from 'styled-components'
import { dynamicComponent, Header, Footer, RadioPlayer } from 'components'
import type { FooterProps , RadioPlayerProps} from 'components'
import { GlobalStyle, theme } from 'styles'
import pkg from 'package.json'
import { GA_MEASUREMENT_ID, pageView } from 'services'

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
	}
	footer: Omit<FooterProps, 'className'>
	radio: Omit<RadioPlayerProps, 'className'>
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
	const router = useRouter()
	useEffect(() => {
		logAppVersion()
	}, [])

	useEffect(() => {
		pageView(window.location.pathname)
		const handleRouteChange = (url: string) => {
			pageView(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

  return <>
		<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
		<Script id="ga" strategy="afterInteractive">
			{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){window.dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', '${GA_MEASUREMENT_ID}');
			`}
		</Script>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header
				logo={pageProps.header?.logo}
				logoAltText={pageProps?.header?.logoAltText}
				fixed={pageProps.header?.fixedHeader}

				donationsURL={pageProps?.header?.donationsURL}
			/>
			<Main>
				<Component {...pageProps} />
				<RadioPlayer {...pageProps.radio} />
			</Main>
			{pageProps.footer && <Footer {...pageProps.footer} />}
		</ThemeProvider>
	</>
}

export default App
