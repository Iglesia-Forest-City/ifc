import type { FC, ReactNode } from 'react'
import NextLink from 'next/link'
import { StyledLink } from './Link.styles'
import { isExternalURL } from 'utils'

export type LinkProps = {
	className?: string
	href: string
	children: ReactNode
}

export const Link: FC<LinkProps> = ({ className, href, children, ...props }) => {
	let link: JSX.Element
	const isExternal = isExternalURL(href)
	if (isExternal) {
		link = (
			<StyledLink
				className={className}
				href={href}
				target="_blank"
				rel="noopener noreferer"
				{...props}
			>{children}</StyledLink>
		)
	} else {
		link = (
			<NextLink href={href} passHref>
				<StyledLink
					className={className}
					{...props}
				>{children}</StyledLink>
			</NextLink>
		)
	}
	return link
}
