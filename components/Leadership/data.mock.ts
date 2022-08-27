import type { LeadershipProps } from './Leadership'

export const mockData: LeadershipProps = {
	id: 'some-id',
  title: 'This is a title',
	leaders: [
		{
			picture: '/john-doe.png',
			name: 'John Doe',
			role: 'Director',
			bio: 'Lorem	ipsum dolor sit amet...',
		},
		{
			picture: '/rick-smith.png',
			name: 'Rick Smith',
			role: 'Leader',
			bio: 'Lorem ipsum dolor sit amet...',
		},
	]
}
