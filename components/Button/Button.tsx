import type { MouseEventHandler, ReactNode } from 'react'
import Link from 'next/link'
import { isExternalURL } from 'utils'
import { StyledButton, StyledLink } from './Button.styles'

export type ButtonProps = {
	className?: string
	href?: string
	secondary?: boolean
	small?: boolean
	uppercase?: boolean
	children: ReactNode
	onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
	type?: 'button' | 'submit' | 'reset'
}

export const Button = ({ className, href, secondary, small, uppercase, children, type = 'button', ...props }: ButtonProps) => {
	let button: JSX.Element

	if (href) {
		const isExternal = isExternalURL(href)
		if (isExternal) {
			button = (
				<StyledLink
					className={className}
					href={href}
					secondary={secondary}
					small={small}
					uppercase={uppercase}
					target="_blank"
					rel="noopener noreferer"
					{...props}
				>{children}</StyledLink>
			)
		} else {
			button = (
				<Link href={href} passHref>
					<StyledLink
						className={className}
						secondary={secondary}
						small={small}
						uppercase={uppercase}
						{...props}
					>{children}</StyledLink>
				</Link>
			)
		}
	} else {
		button = (
			<StyledButton
				type={type}
				className={className}
				secondary={secondary}
				small={small}
				uppercase={uppercase}
				{...props}
			>{children}</StyledButton>
		)
	}
	return button
}
