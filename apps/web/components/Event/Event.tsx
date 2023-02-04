import { destructDateTime, formatDateTime } from 'utils'
import { DateInfo, Day, EventInfo, EventWrapper, Month, Name, Time, Weekday } from './Event.styles'

export type EventProps = {
	name: string
	date: string
}

export const Event = ({ name, date }: EventProps) => {
	const dateObject = new Date(date);
	const { weekday, month, day, time } = destructDateTime(formatDateTime(dateObject))

	return (
		<EventWrapper>
			<DateInfo dateTime={date}>
				<Month>{month}</Month>
				<Day>{day}</Day>
				<Weekday>{weekday}</Weekday>
			</DateInfo>
			<EventInfo>
				<Name>{name}</Name>
				<Time dateTime={dateObject.toLocaleTimeString()}>{time}</Time>
			</EventInfo>
		</EventWrapper>
	)
}
