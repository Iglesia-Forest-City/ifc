import Image from 'next/image'
import { Link } from 'components'
import { BelongSection, Content, Offerings, Picture, Subtitle, Support, Text, Title } from './Belong.styles'

type BelongSection = {
	title: string
	text: string
	picture: string
	ctaLabel?: string
	ctaUrl?: string
}

export type BelongProps = {
	className?: string
	title: string
	support: BelongSection
	offerings: Required<BelongSection>
}

export const Belong = ({ className, title, support, offerings }: BelongProps) => (
	<BelongSection>
		<Title className={className}>{title}</Title>
		<Support>
			<Content>
				<Subtitle>{support.title}</Subtitle>
				<Text dangerouslySetInnerHTML={{ __html: support.text }} />
				{support.ctaUrl && <Link href={support.ctaUrl}>{support.ctaLabel}</Link>}
			</Content>
			<Picture>
				<Image src={support.picture} alt={support.title} height={653} width={598} />
			</Picture>
		</Support>
		<Offerings>
			<Content>
				<Subtitle>{offerings.title}</Subtitle>
				<Text dangerouslySetInnerHTML={{ __html: offerings.text }} />
				<Link href={offerings.ctaUrl} target="_blank">{offerings.ctaLabel}</Link>
			</Content>
			<Picture>
				<Image src={offerings.picture} alt={offerings.title} height={653} width={598} />
			</Picture>
		</Offerings>
	</BelongSection>
)
