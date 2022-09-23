import { BelongProps } from './Belong'

export const mockData: BelongProps = {
	title: 'Main title',
	support: {
		title: 'Title 1',
		text: '<p>Some text</p>',
		picture: '/picture1.jpg',
		ctaLabel: 'Label 1',
		ctaUrl: 'https://www.some-url.com',
	},
	offerings: {
		title: 'Title 2',
		text: '<p>Some other text</p>',
		picture: '/picture2.jpg',
		ctaLabel: 'Label 2',
		donationsURL: 'https://donate.com',
		donationsURLInternational: 'https://int.donate.com',
	}
}
