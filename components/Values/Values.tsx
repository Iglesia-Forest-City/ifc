import type { FC } from 'react'
import { Title, Value, ValuesSection } from './Values.styles'

export type ValuesProps = {
	className?: string
	title: string
	values: string[]
}

export const Values: FC<ValuesProps> = ({ className, title, values }) => (
	<ValuesSection>
		<Title className={className}>{title}</Title>
		{values.map(value => <Value key={value}>{value}</Value>)}
	</ValuesSection>
)
