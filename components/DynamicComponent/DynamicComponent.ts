
import type { ReactNode } from 'react'
import { createElement, forwardRef } from 'react'
import { Wrapper } from './DynamicComponent.styles'

export type DynamicComponentProps = {
	children: ReactNode
	[key: string]: unknown
}

export const dynamicComponent = (tag: string, hasWrapper = false) => {
	const component = forwardRef<Element, DynamicComponentProps>(({ children, ...props }, ref) => {
		const content = hasWrapper ? createElement(Wrapper, {}, children) : children
		return createElement(tag, { ...props, ref }, content)
	})
	component.displayName = `Dynamic-${tag}`
	return component
}
