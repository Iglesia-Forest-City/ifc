import { Link } from 'components';
import { HeroSection, Text, Title, Video, WrappedHero } from './Hero.styles'

export type HeroProps = {
	className?: string
	title: string
	text: string
	cta: {
		text: string
		href: string
	},
	video: string
	poster: string
}

export const Hero = ({ className, title, text, poster, video, cta }: HeroProps) => (
	<HeroSection className={className}>
		<Video playsInline autoPlay muted loop poster={poster}>
			<source src={video} type="video/mp4" />
		</Video>
		<WrappedHero>
			<Title>{title}</Title>
			<Text>{text}</Text>
			<Link href={cta.href}>{cta.text}</Link>
		</WrappedHero>
	</HeroSection>
)
