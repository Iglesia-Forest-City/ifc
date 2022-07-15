import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { theme } from 'styles'

export default class Document extends NextDocument {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await NextDocument.getInitialProps(ctx)
			return {
				...initialProps,
				styles: [initialProps.styles, sheet.getStyleElement()],
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html lang="es">
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
					<link rel="manifest" href="/favicon/site.webmanifest" />
					<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color={theme.colors.blue.dark} />
					<link rel="shortcut icon" href="/favicon/favicon.ico" />
					<meta name="msapplication-TileColor" content={theme.colors.blue.dark} />
					<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
					<meta name="theme-color" content={theme.colors.blue.dark} />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
					<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
