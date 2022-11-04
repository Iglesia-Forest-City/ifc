import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import { getCountry } from 'services'

export type DonateProps = {
	donationsURL: string
	donationsURLInternational: string
}

const Donate = ({ donationsURL, donationsURLInternational }: DonateProps) => {
	useEffect(() => {
		const redirect = async () => {
			const country = await getCountry()
			let url = donationsURL
			if (country !== 'US') {
				url = donationsURLInternational
			}
			window.location.href = url
		}
		redirect()
	}, [donationsURL, donationsURLInternational])
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
		donationsURL: 'https://adventistgiving.org/#/org/ANTBEV/envelope/start',
		donationsURLInternational: 'https://www.paypal.com/donate/?hosted_button_id=4SR42CJAZJLNN',
	},
})
