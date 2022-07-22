import type { FC } from 'react'
import cx from 'classnames'
import { Text, Title, WelcomeSection } from './Welcome.styles'

export type WelcomeProps = {
	className?: string;
	title: string;
	text: string;
	backgroundImage: string;
}

export const Welcome: FC<WelcomeProps> = ({ className, title, text, backgroundImage }) => (
	<WelcomeSection $backgroundImage={backgroundImage}>
		<Title className={cx(className, 'custom-class')}>{title}</Title>
		<Text>{text}</Text>
	</WelcomeSection>
)
