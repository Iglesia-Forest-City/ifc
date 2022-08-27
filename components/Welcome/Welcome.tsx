import { Text, Title, WelcomeSection } from './Welcome.styles'

export type WelcomeProps = {
	className?: string
	id?: string
	title: string
	text: string
	backgroundImage: string
}

export const Welcome = ({ className, id, title, text, backgroundImage }: WelcomeProps) => (
	<WelcomeSection id={id} className={className} $backgroundImage={backgroundImage}>
		<Title>{title}</Title>
		<Text>{text}</Text>
	</WelcomeSection>
)
