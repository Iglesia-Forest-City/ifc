import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero, type HeroProps } from 'components'

type HomeProps = {
	hero: HeroProps
}

const Home: NextPage<HomeProps> = ({ hero }) => {
  return (
		<>
      <Head>
        <title>Iglesia Forest City</title>
        <meta name="description" content="Iglesia Forest City" />
      </Head>
			<Hero title={hero.title} text={hero.text} cta={hero.cta} video={hero.video} poster={hero.poster} />
		</>
  )
}

export default Home

export const getStaticProps = async () => {
	return {
		props: {
			logo: '/fc-logo.svg',
			logoAltText: 'Forest City logo',
			fixedHeader: true,
			hero: {
				video: '/hero-ifc.mp4',
				poster: '/hero-poster.png',
				title: 'Conoce a Jesús y vive.',
				text: 'Dondequiera que te encuentres en la vida, queremos ser el lugar en el que puedas confiar para recibir inspiración, ánimo y apoyo. Nos reunimos cada sábado a las 10:30 am.',
				cta: {
					text: 'Ver sermones',
					href: '#'
				}
			}
		}
	}
}
