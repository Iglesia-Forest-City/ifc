import { useEffect } from 'react'
import type { GetServerSideProps } from 'next'
import type { IPResponse } from 'services'
import { ip } from 'services'

export type DonateProps = {
	donationsURL: string
}

const Donate = () => {
	useEffect(() => {
		let donationsURL = 'https://adventistgiving.org/#/org/ANTBEV/envelope/start'
		const donationsURLInternational = 'https://www.paypal.com/donate/?hosted_button_id=4SR42CJAZJLNN'
		const getIp = async () => {
			try {
				const { data } = await ip.get<IPResponse>(`/json/`);
				donationsURL = data.country_code === 'US' ? donationsURL : donationsURLInternational
			} catch (err) {
				console.error(err)
				throw err
			} finally {
				window.location.href = donationsURL
			}
		}
		getIp();
	}, [])
	return null
}

export default Donate

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {
			header: {
				logo: '/fc-logo.svg',
				logoAltText: 'Forest City logo',
				fixedHeader: true,
				donationsURL: '/donar',
			},
			radio: {
				logo: '/fcradio-logo.png',
				logoAltText: 'Forest City Radio',
				url: '/live-radio'
			}
		},
	}
}
