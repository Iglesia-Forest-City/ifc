import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { WrappedHeader, Logo, Actions } from './Header.styles'
import { Button } from 'components'

export type HeaderProps = {
	className?: string;
	logo: string;
	logoAltText: string;
}

export const Header: FC<HeaderProps> = ({ className, logo, logoAltText }) => (
	<WrappedHeader className={className}>
		<Logo>
			<Link href="/">
				<a>
					<Image src={logo} alt={logoAltText} width={80} height={56} />
				</a>
			</Link>
		</Logo>
		<Actions>
			<Button secondary>Contacto</Button>
			<Button>Donar</Button>
		</Actions>
	</WrappedHeader>
)
