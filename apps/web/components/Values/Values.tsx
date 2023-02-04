import { Title, Value, ValuesSection } from './Values.styles'

export type ValuesProps = {
	className?: string
	title: string
	values: string[]
}

export const Values = ({ className, title, values }: ValuesProps) => (
	<ValuesSection>
		<Title className={className}>{title}</Title>
		{values.map(value => <Value key={value}>{value}</Value>)}
	</ValuesSection>
)
