import { render, screen } from 'test-utils'
import { Leadership } from './Leadership'
import { mockData } from './data.mock'

describe('<Leadership />', () => {
  it('should render', () => {
    render(<Leadership {...mockData} />)
    const title = screen.getByRole('heading', { level: 2, name: mockData.title})
    expect(title).toBeInTheDocument()

		mockData.leaders.forEach(({ picture, name, role, bio }) => {
			const image = screen.getByAltText(name)
			const leaderName = screen.getByRole('heading', { level: 3, name })
			const leaderRole = screen.getByRole('heading', { level: 4, name: role })

			expect(image).toBeInTheDocument()
			expect(leaderName).toBeInTheDocument()
			expect(leaderRole).toBeInTheDocument()
		})
  })
})
