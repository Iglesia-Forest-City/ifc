import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Network, Networks, SocialNetworksSection, Title } from './SocialNetworks.styles'

export type SocialNetworksProps = {
	className?: string
	title: string
	facebookURL: string
	instagramURL: string
	youtubeURL: string
}

export const SocialNetworks = ({ className, title, facebookURL, instagramURL, youtubeURL }: SocialNetworksProps) => {
	return (
		<SocialNetworksSection className={className}>
			<Title className={className}>{title}</Title>
			<Networks>
				<Network
					href={facebookURL}
					target="_blank"
					rel="noopener noreferer"
				><FaFacebook /></Network>
				<Network
					href={instagramURL}
					target="_blank"
					rel="noopener noreferer"
				><FaInstagram /></Network>
				<Network
					href={youtubeURL}
					target="_blank"
					rel="noopener noreferer"
				><FaYoutube /></Network>
			</Networks>
		</SocialNetworksSection>
	)
}
