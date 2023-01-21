import type { HTMLAttributeAnchorTarget, ReactNode } from 'react'
import { StyledLink } from './Link.styles'
import { isExternalURL } from 'utils'

export type LinkProps = {
	className?: string
	href: string
	target?: HTMLAttributeAnchorTarget
	children: ReactNode
}

export const Link = ({ className, href, target, children, ...props }: LinkProps) => {
	const isExternal = isExternalURL(href)

	return <StyledLink
		className={className}
		href={href}
		target={isExternal ? target || '_blank' : target}
		rel={isExternal ? 'noopener noreferer' : undefined}
		{...props}
	>{children}</StyledLink>
}
