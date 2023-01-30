import { useEffect } from 'react'
import type { GetStaticProps } from 'next'
import { useDonationUrl } from 'hooks'

export type DonateProps = {
	donationsURL: string
	donationsURLInternational: string
}

const Donate = ({ donationsURL, donationsURLInternational }: DonateProps) => {
	const donateURL = useDonationUrl(donationsURL, donationsURLInternational)
	useEffect(() => {
		window.location.href = donateURL
	}, [donateURL])
	return null
}

export default Donate

export const getStaticProps: GetStaticProps<DonateProps> = async () => ({
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
		donationsURL: 'https://adventistgiving.org/#/org/ANTBEV/envelope/start',
		donationsURLInternational: 'https://www.paypal.com/donate/?hosted_button_id=4SR42CJAZJLNN',
	},
})
