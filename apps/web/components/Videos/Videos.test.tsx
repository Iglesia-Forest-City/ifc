import { render, screen } from 'test-utils'
import { Videos } from './Videos'
import { mockData } from './data.mock'

describe('<Videos />', () => {
  it('should render', () => {
    render(<Videos {...mockData} />)
    const title = screen.getByRole('heading', { level: 2, name: mockData.title })
		const cta = screen.getByRole('link', { name: 'Ver todos' })
    expect(title).toBeInTheDocument()
		expect(cta).toBeInTheDocument()
		mockData.videos.forEach(({ title }) => {
			const videoIFrame = screen.getByTitle(title)
			expect(videoIFrame).toBeInTheDocument()
		})
  })
})
