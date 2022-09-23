import { Dispatch, forwardRef, SetStateAction, useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { WrappedHeader, Logo, Nav, Ul, Li, A } from './Header.styles'
import { Button } from 'components'
import { getCountry } from 'services/trace';

const adjustDonateURL = async (setURL: Dispatch<SetStateAction<string>>, url: string) => {
	const country = await getCountry()
	if (country !== 'US') {
		setURL(url)
	}
}

export type HeaderProps = {
	className?: string
	logo: string
	logoAltText: string
	fixed?: boolean
	donationsURL: string
	donationsURLInternational: string
}

export const Header = forwardRef<Element, HeaderProps>(({ className, logo, logoAltText, fixed, donationsURL, donationsURLInternational }, ref) => {
	const [donateURL, setDonateURL] = useState(donationsURL)

	useEffect(() => {
		adjustDonateURL(setDonateURL, donationsURLInternational)
	}, [donationsURLInternational])

	return (
		<WrappedHeader ref={ref} className={className} $isFixed={fixed}>
			<Logo>
				<Link href="/">
					<a>
						<Image src={logo} alt={logoAltText} width={80} height={56} />
					</a>
				</Link>
			</Logo>
			<Nav>
				<Ul>
					<Li>
						<Link href="#sermones" passHref>
							<A>Sermones</A>
						</Link>
					</Li>
					<Li>
						<Link href="#acerca-de-nosotros" passHref>
							<A>Acerca de</A>
						</Link>
					</Li>
					<Li>
						<Link href="#liderazgo" passHref>
							<A>Liderazgo</A>
						</Link>
					</Li>
					<Li>
						<Link href="#eventos" passHref>
							<A>Eventos</A>
						</Link>
					</Li>
					{/* <Li>
						<Button secondary>Contacto</Button>
					</Li> */}
					<Li>
						<Button href={donateURL}>Donar</Button>
					</Li>
				</Ul>
			</Nav>
		</WrappedHeader>
	)
})

Header.displayName = 'Header'
