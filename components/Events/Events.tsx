import { EventsSection, EventsWrapper, Title } from './Events.styles'
import type { EventProps } from 'components'
import { Event } from 'components'

export type EventsProps = {
	className?: string
	id: string
	title: string
	events: EventProps[]
}

export const Events = ({ className, id, title, events }: EventsProps) => {
	return (
		<EventsSection id={id}>
			<Title className={className}>{title}</Title>
			<EventsWrapper>
				{events.map(({ name, date }) => <Event key={`${name}-${date}`} name={name} date={date} />)}
			</EventsWrapper>
		</EventsSection>
	)
}
