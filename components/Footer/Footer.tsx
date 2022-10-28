import { ContactFormWrapper, Copyright, InfoWrapper, StyledFooter, Title } from './Footer.styles'

export type FooterProps = {
	className?: string
	title: string
	copyright: string
}

export const Footer = ({ className, title, copyright }: FooterProps) => {
	return (
		<StyledFooter>
			<Title className={className}>{title}</Title>
			<ContactFormWrapper></ContactFormWrapper>
			<InfoWrapper></InfoWrapper>
			<Copyright>{`${copyright} © ${new Date().getFullYear()}`}</Copyright>
		</StyledFooter>
	)
}
