import { forwardRef } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { WrappedHeader, Logo, Nav, Ul, Li, A } from './Header.styles'
import { Button } from 'components'

export type HeaderProps = {
	className?: string
	logo: string
	logoAltText: string
	fixed?: boolean
	donationsURL: string
}

export const Header = forwardRef<Element, HeaderProps>(({ className, logo, logoAltText, fixed, donationsURL }, ref) => (
	<WrappedHeader ref={ref} className={className} $isFixed={fixed}>
		<Logo>
			<Link href="/">
				<Image src={logo} alt={logoAltText} width={80} height={56} priority />
			</Link>
		</Logo>
		<Nav>
			<Ul>
				<Li>
					<A href="#sermones">Sermones</A>
				</Li>
				<Li>
					<A href="#acerca-de-nosotros">Acerca de</A>
				</Li>
				<Li>
					<A href="#liderazgo">Liderazgo</A>
				</Li>
				<Li>
					<A href="#eventos">Eventos</A>
				</Li>
				<Li>
					<Button href="#contacto" secondary>Contacto</Button>
				</Li>
				<Li>
					<Button href={donationsURL} target="_blank">Donar</Button>
				</Li>
			</Ul>
		</Nav>
	</WrappedHeader>
))

Header.displayName = 'Header'
