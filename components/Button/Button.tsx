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
}

export const Button = ({ className, href, secondary, small, uppercase, children, ...props }: ButtonProps) => {
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
				type="button"
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
