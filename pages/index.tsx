import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import type { AxiosError } from 'axios'
import { Hero, Leadership, Values, Videos, Welcome } from 'components'
import type { HeroProps, LeadershipProps, ValuesProps, VideosProps, WelcomeProps } from 'components'
import { youtube } from 'services'
import type { YouTubeDataResponse, YouTubeVideoSnippet } from 'services'

type HomeProps = {
	hero: HeroProps
	welcome: WelcomeProps
	values: ValuesProps
	videos: VideosProps
	leadership: LeadershipProps
}

const Home: NextPage<HomeProps> = ({ hero, welcome, values, videos, leadership }) => {
  return (
		<>
      <Head>
        <title>Iglesia Forest City</title>
        <meta name="description" content="Iglesia Forest City" />
      </Head>
			<Hero title={hero.title} text={hero.text} cta={hero.cta} video={hero.video} poster={hero.poster} />
			<Videos id={videos.id} title={videos.title} videos={videos.videos} channelURL={videos.channelURL} />
			<Welcome id={welcome.id} title={welcome.title} text={welcome.text} backgroundImage={welcome.backgroundImage}/>
			<Values title={values.title} values={values.values} />
			<Leadership id={leadership.id} title={leadership.title} leaders={leadership.leaders} />
		</>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	let videos: YouTubeVideoSnippet[]
	try {
		const youtubeResponse = await youtube.get<YouTubeDataResponse>('/playlistItems', {
			params: {
				playlistId: 'PLOqMc4wUtGMtYS9zz5UoK-dGEwYb1kjZ0',
				maxResults: 10,
			},
		})
		videos = youtubeResponse.data.items.map(({ snippet }) => snippet)
	} catch (err) {
		// eslint-disable-next-line no-console
		console.error(`Videos: ${(err as AxiosError).message}`)
		videos = []
	}
	return {
		props: {
			header: {
				logo: '/fc-logo.svg',
				logoAltText: 'Forest City logo',
				fixedHeader: true,
				donationsURL: 'https://adventistgiving.org/#/org/ANTBEV/envelope/start',
				donationsURLInternational: 'https://www.paypal.com/donate/?hosted_button_id=4SR42CJAZJLNN',
			},
			hero: {
				video: '/hero-ifc.mp4',
				poster: '/hero-poster.png',
				title: 'Conoce a Jesús y vive.',
				text: 'Dondequiera que te encuentres en la vida, queremos ser el lugar en el que puedas confiar para recibir inspiración, ánimo y apoyo. Nos reunimos cada sábado a las 10:30 am.',
				cta: {
					text: 'Ver sermones',
					href: '#sermones'
				}
			},
			videos: {
				id:'sermones',
				title: 'Más temas',
				videos,
				channelURL: 'https://www.youtube.com/c/VideosForestCity'
			},
			welcome: {
				id: 'acerca-de-nosotros',
				title: 'Bienvenido a Forest City',
				text: 'Desde nuestra fundación en 1971, hemos crecido siendo una comunidad diversa de discípulos de Cristo, representando distintas edades, nacionalidades y tradiciones. Nos une  la fe en la Palabra de Dios, nuestro amor por Él y por nuestro prójimo, y  el compromiso al servicio y al evangelio.\nNos alegra que hayas pasado por nuestro sitio web y esperamos que muy pronto te conectes con nosotros en persona y/ o online.',
				backgroundImage: '/welcome.jpg'
			},
			values: {
				title: 'Valores',
				values: ['Fe', 'Amor', 'Compromiso', 'Respeto']
			},
			leadership: {
				id: 'liderazgo',
				title: 'Liderazgo Forest City',
				leaders: [
					{
						picture: '/joel-barrios.png',
						name: 'Joel Barrios',
						role: 'Pastor senior',
						bio: 'Oriundo de Argentina. Desde niño  fue marcado por muchas experiencias que lo llevaron a experimentar el llamado del Señor y a dedicar su vida a la predicación del Evangelio. Actualmente es pastor de la Iglesia Adventista de Forest City en la Florida.',
					},
					{
						picture: '/joel-barrios.png',
						name: 'Denar Almonte',
						role: 'Ministro de alabanza y adoración',
						bio: 'Nacido en Chile, actualmente se desempeña como Ministro de alabanza de la Iglesia Adventista de Forest City. Es productor musical en su estudio de grabación junto a su esposa Izzie a quien conoció mientras integraba el grupo Heritage Singers en Español, del cual fue director por 12 años.',
					},
					{
						picture: '/joel-barrios.png',
						name: 'Angelo Acevedo',
						role: 'Pastor asociado de jóvenes',
						bio: 'Nació en la isla del encanto: Puerto Rico. Anteriormente sirvió como pastor en la conferencia de Idaho y como capellán en un centro para jóvenes en riesgo llamado Project Patch. Actualmente termina su maestría en Ministerio Pastoral en la Universidad de Andrews.',
					},
					{
						picture: '/joel-barrios.png',
						name: 'Daniel Ponce',
						role: 'Pastor asociado',
						bio: 'Nació en Argentina. Sirvió en Puerto Rico y Argentina como pastor, evangelista, director de radio y tv y productor de programas para radio y tv.',
					},
				]
			}
		}
	}
}
