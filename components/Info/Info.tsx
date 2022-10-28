import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io'
import { HiPhone, HiLocationMarker } from 'react-icons/hi'
import { InfoItem, InfoLink, InfoText, MapFrame } from './Info.styles'

export type InfoProps = {
	whatsApp: string
	phone: string
	email: string[]
	address: {
		street: string
		city: string
		state: string
		zipCode: string
		mapEmbedURL: string
		mapTitle: string
	}
}

export const Info = ({ whatsApp, phone, email, address }: InfoProps) => {
	return (
		<>
			<InfoItem>
				<IoLogoWhatsapp />
				<InfoLink href={`https://wa.me/${whatsApp}`} target="_blank" rel="noopener noreferer">{whatsApp}</InfoLink>
			</InfoItem>
			<InfoItem>
				<HiPhone />
				<InfoLink href={`tel:${phone}`}>{phone}</InfoLink>
			</InfoItem>
			<InfoItem>
				<IoMdMail />
				{email.map(emailAddress => <InfoLink key={emailAddress} href={`mailto:${emailAddress}`}>{emailAddress}</InfoLink>)}
			</InfoItem>
			<InfoItem>
				<HiLocationMarker />
				<InfoText>{address.street}, {address.city}, {address.state}, {address.zipCode}</InfoText>
			</InfoItem>
			<MapFrame src={address.mapEmbedURL} frameBorder={0} aria-hidden={false} tabIndex={0} title={address.mapTitle} />
		</>
	)
}
