import Image from 'next/image'
import { vars } from 'styles';
import { Title, LeadershipSection, Leader, Leaders, BioWrapper, Name, Role, ImageWrapper, Bio, LeadersWrapper } from './Leadership.styles';

type Leader = {
	picture: string
	name: string
	role: string
	bio: string
}

export type LeadershipProps = {
	id: string
	className?: string
	title: string
	leaders: Leader[]
}

export const Leadership = ({ id, className, title, leaders }: LeadershipProps) => {
	return (
		<LeadershipSection id={id} className={className}>
			<Title>{title}</Title>
			<Leaders>
				<LeadersWrapper $itemsCount={leaders.length}>
					{leaders.map(({ picture, name, role, bio }) => (
						<Leader key={`${name}-${role}`}>
							<ImageWrapper>
								<Image src={picture} alt={name} fill sizes={`(max-width: ${vars.phoneUpperBoundary - 1}px) 100vw, 25vw`} />
							</ImageWrapper>
							<BioWrapper>
								<Name>{name}</Name>
								<Role>{role}</Role>
								<Bio>{bio}</Bio>
							</BioWrapper>
						</Leader>
					))}
				</LeadersWrapper>
			</Leaders>
		</LeadershipSection>
	)
}
