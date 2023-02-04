import type { HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from 'react'
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
	target?: HTMLAttributeAnchorTarget
}

export const Button = ({ className, href, secondary, small, uppercase, children, type = 'button', target, ...props }: ButtonProps) => {
	let button: JSX.Element

	if (href) {
		const isExternal = isExternalURL(href)
		button = (
			<StyledLink
				className={className}
				href={href}
				$secondary={secondary}
				$small={small}
				$uppercase={uppercase}
				target={isExternal ? target || '_blank' : target}
				rel={isExternal ? 'noopener noreferer' : undefined}
				{...props}
			>{children}</StyledLink>
		)
	} else {
		button = (
			<StyledButton
				type={type}
				className={className}
				$secondary={secondary}
				$small={small}
				$uppercase={uppercase}
				{...props}
			>{children}</StyledButton>
		)
	}
	return button
}
