import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { getCountry } from 'services'

const adjustDonateURL = async (setURL: Dispatch<SetStateAction<string>>, url: string) => {
	const country = await getCountry()
	if (country !== 'US') {
		setURL(url)
	}
}

export const useDonationUrl = (donationsURL: string, donationsURLInternational: string) => {
	const [donateURL, setDonateURL] = useState(donationsURL)

	useEffect(() => {
		adjustDonateURL(setDonateURL, donationsURLInternational)
	}, [donationsURLInternational])

	return donateURL
}
