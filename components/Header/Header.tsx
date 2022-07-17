import { forwardRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { WrappedHeader, Logo, Nav, Ul, Li, A } from './Header.styles'
import { Button } from 'components'

export type HeaderProps = {
	className?: string;
	logo: string;
	logoAltText: string;
	fixed?: boolean;
}

export const Header = forwardRef<Element, HeaderProps>(({ className, logo, logoAltText, fixed }, ref) => (
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
					<Link href="#" passHref>
						<A>Sermones</A>
					</Link>
				</Li>
				<Li>
					<Link href="#" passHref>
						<A>Acerca de</A>
					</Link>
				</Li>
				<Li>
					<Link href="#" passHref>
						<A>Liderazgo</A>
					</Link>
				</Li>
				<Li>
					<Link href="#" passHref>
						<A>Eventos</A>
					</Link>
				</Li>
				<Li>
					<Button secondary>Contacto</Button>
				</Li>
				<Li>
					<Button>Donar</Button>
				</Li>
			</Ul>
		</Nav>
	</WrappedHeader>
))

Header.displayName = 'Header'
