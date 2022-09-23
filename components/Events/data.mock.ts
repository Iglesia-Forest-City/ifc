import { EventsProps } from './Events'

export const mockData: EventsProps = {
  title: 'This is a title',
	id: 'some-id',
	events: [
		{
			name: 'Diálogo abierto',
			date: '2022-10-14T19:30:00',
		},
		{
			name: 'Escuela Sabática',
			date: '2022-10-15T09:30:00',
		},
		{
			name: 'Predicación',
			date: '2022-10-15T11:30:00',
		},
		{
			name: 'Sociedad de Jóvenes',
			date: '2022-10-15T16:30:00',
		}
	]
}
