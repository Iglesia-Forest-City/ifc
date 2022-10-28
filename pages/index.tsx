import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import type { AxiosError } from 'axios'
import { Belong, BelongProps, Events, Hero, Leadership, SocialNetworks, SocialNetworksProps, Values, Videos, Welcome } from 'components'
import type { EventsProps, HeroProps, LeadershipProps, ValuesProps, VideosProps, WelcomeProps } from 'components'
import { youtube } from 'services'
import type { YouTubeDataResponse, YouTubeVideoSnippet } from 'services'

type HomeProps = {
	hero: Omit<HeroProps, 'className'>
	welcome: Omit<WelcomeProps, 'className'>
	values: Omit<ValuesProps, 'className'>
	videos: Omit<VideosProps, 'className'>
	leadership: Omit<LeadershipProps, 'className'>
	events: Omit<EventsProps, 'className'>
	belong: Omit<BelongProps, 'className'>
	socialNetworks: Omit<SocialNetworksProps, 'className'>
}

const Home: NextPage<HomeProps> = ({ hero, welcome, values, videos, leadership, events, belong, socialNetworks }) => {
  return (
		<>
      <Head>
        <title>Iglesia Forest City</title>
        <meta name="description" content="Iglesia Forest City" />
      </Head>
			<Hero {...hero} />
			{videos.videos.length > 0 && <Videos {...videos} />}
			<Welcome {...welcome}/>
			<Values {...values} />
			<Leadership {...leadership} />
			{events.events.length > 0 && <Events {...events} />}
			<Belong {...belong} />
			<SocialNetworks {...socialNetworks} />
		</>
  )
}

export default Home

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
			footer: {
				title: 'Contáctanos',
				info: {
					whatsApp: '+14077734067',
					phone: '+18327429906',
					email: ['info@iglesiafc.com', 'forestcitysda@gmail.com'],
					address: {
						street: '7601 Forest City Rd. #01',
						city: 'Orlando',
						state: 'FL',
						zipCode: '32810',
						mapEmbedURL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1060176933092!2d-81.41443674916161!3d28.62658449101429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e776cb8b7f4ab3%3A0x9d667b7859a8a84f!2sForest%20City%20Spanish%20Seventh-day%20Adventist%20Church!5e0!3m2!1sen!2svg!4v1666972400239!5m2!1sen!2svg',
						mapTitle: 'Localización Iglesia Forest City',
					},
				},
				copyright: 'Todos los derechos reservados',
			},
			hero: {
				video: '/hero-ifc.mp4',
				poster: '/hero-poster.png',
				title: 'Conoce a Jesús y vive.',
				text: 'Dondequiera que te encuentres en la vida, queremos ser el lugar en el que puedas confiar para recibir inspiración, ánimo y apoyo. Nos reunimos cada sábado a las 10:30 am.',
				cta: {
					text: 'Ver sermones',
					href: '#sermones',
				}
			},
			videos: {
				id:'sermones',
				title: 'Más temas',
				videos,
				channelURL: 'https://www.youtube.com/c/VideosForestCity',
			},
			welcome: {
				id: 'acerca-de-nosotros',
				title: 'Bienvenido a Forest City',
				text: 'Desde nuestra fundación en 1971, hemos crecido siendo una comunidad diversa de discípulos de Cristo, representando distintas edades, nacionalidades y tradiciones. Nos une  la fe en la Palabra de Dios, nuestro amor por Él y por nuestro prójimo, y  el compromiso al servicio y al evangelio.\nNos alegra que hayas pasado por nuestro sitio web y esperamos que muy pronto te conectes con nosotros en persona y/ o online.',
				backgroundImage: '/welcome.jpg',
			},
			values: {
				title: 'Valores',
				values: ['Fe', 'Amor', 'Compromiso', 'Respeto'],
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
			},
			events: {
				id: 'eventos',
				title: 'Eventos',
				events: [
					{
						name: 'Diálogo abierto',
						date: '2022-10-14T19:30:00',
					},
					{
						name: 'Escuela Sabática',
						date: '2022-10-15T09:30:00',
					},
					{
						name: 'Predicación',
						date: '2022-10-15T11:30:00',
					},
					{
						name: 'Sociedad de Jóvenes',
						date: '2022-10-15T16:30:00',
					}
				]
			},
			belong: {
				title: 'Haz parte de Forest City',
				support: {
					title: 'Apoya con tu tiempo y talento',
					text: `
						<p>Participa en alguna de las diversas oportunidades de servicio que Forestcity ofrece a través del Ministerio de Servicios Comunitarios. Promovemos el voluntariado por medio de actos concretos de amor y servicio, superando el egoísmo y la indiferencia hacia las necesidades humanas.</p>
						<p>Algunas de las actividades que realizamos son:
							<ul>
								<li>Banco de alimentos con distribuciones semanales</li>
								<li>Distribución de ropa y alimentos en barrios necesitados</li>
								<li>Regalos para niños en fechas especiales</li>
								<li>Programas y eventos enfocados a las familias de la comunidad en celebraciones religiosas</li>
								<li>Programas de servicios sociales y de ayuda a las necesidades de los miembros de iglesia (ayuda arrendamientos, pago utilidades, búsqueda de trabajo, etc.)</li>
							</ul>
						</p>
					`,
					picture: '/love-your-neighbour.jpg',
					// ctaLabel: 'Quiero ayudar',
					// ctaUrl: '',
				},
				offerings: {
					title: 'Tu ofrenda hace la diferencia',
					text: `
						<h3>¿Qué sucede con el dinero que donas?</h3>
						<p>¡Se cambian vidas! Dios provee para Forestcity a través de los diezmos y ofrendas. Honramos tus donaciones con una mayordomía fiel, prácticas comerciales éticas y plena responsabilidad para que la integridad financiera de la iglesia permanezca irreprochable. Consulta nuestro <a href="#">Informe Anual 2022 aquí</a>. Si tienes alguna pregunta sobre cómo donar o sobre nuestras políticas financieras, llámanos al <a href="tel:+13219876543">(321) 987 6543</a>, o envía un correo electrónico a <a href="mailto:tesoreria@forestcity.com">tesoreria@forestcity.com</a>.</p>
					`,
					picture: '/give-thanks.jpg',
					ctaLabel: 'Donar ahora',
					donationsURL: 'https://adventistgiving.org/#/org/ANTBEV/envelope/start',
					donationsURLInternational: 'https://www.paypal.com/donate/?hosted_button_id=4SR42CJAZJLNN',
				}
			},
			socialNetworks: {
				title: 'Síguenos en nuestras redes sociales',
				facebookURL: 'https://www.facebook.com/IglesiaAdventistaForestCity',
				instagramURL: 'https://www.instagram.com/forestcitysda/',
				youtubeURL: 'https://www.youtube.com/c/VideosForestCity',
			}
		}
	}
}
