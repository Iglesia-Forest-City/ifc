import { useEffect } from 'react'
import type { GetServerSideProps } from 'next'
import type { IPResponse } from 'services'
import { ip } from 'services'
import { getIpFromHeader } from 'utils'

export type DonateProps = {
	donationsURL: string
}

const Donate = ({ donationsURL }: DonateProps) => {
	useEffect(() => {
		window.location.href = donationsURL
	}, [donationsURL])
	return null
}

export default Donate

export const getServerSideProps: GetServerSideProps<DonateProps> = async ({ req }) => {
	let donationsURL = 'https://adventistgiving.org/#/org/ANTBEV/envelope/start'
	const donationsURLInternational = 'https://www.paypal.com/donate/?hosted_button_id=4SR42CJAZJLNN'
	try {
		const headerIp = Array.isArray(req.headers['x-forwarded-for']) ? req.headers['x-forwarded-for'][0] : req.headers['x-forwarded-for']
		const clientIP = headerIp && getIpFromHeader(headerIp) || req.socket.remoteAddress;
		console.log({ clientIP }, req.headers['x-forwarded-for'], req.socket.remoteAddress)
		const { data } = await ip.get<IPResponse>(`${clientIP}/json/`)
		donationsURL = data.country_code === 'US' ? donationsURL : donationsURLInternational
	} catch (err) {
		console.error(err)
		throw err
	}
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
			},
			donationsURL,
		},
	}
}
