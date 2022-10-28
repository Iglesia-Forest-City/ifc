import type { InfoProps } from 'components'
import { Info } from 'components'
import { ContactFormWrapper, Copyright, InfoWrapper, StyledFooter, Title } from './Footer.styles'

export type FooterProps = {
	className?: string
	title: string
	copyright: string
	info: InfoProps
}

export const Footer = ({ className, title, copyright, info }: FooterProps) => {
	return (
		<StyledFooter>
			<Title className={className}>{title}</Title>
			<ContactFormWrapper></ContactFormWrapper>
			<InfoWrapper><Info {...info} /></InfoWrapper>
			<Copyright>{`${copyright} © ${new Date().getFullYear()}`}</Copyright>
		</StyledFooter>
	)
}
