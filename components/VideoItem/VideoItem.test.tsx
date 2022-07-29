import { render, screen } from 'test-utils'
import { VideoItem } from './VideoItem'
import { mockData } from './data.mock'

describe('<VideoItem />', () => {
  it('should render', () => {
    render(<VideoItem {...mockData} />)
		const video = screen.getByTitle(mockData.title)
    const title = screen.getByRole('heading', { level: 3, name: mockData.title })
		const date = screen.getByText(mockData.date)
		expect(video).toBeInTheDocument()
    expect(title).toBeInTheDocument()
		expect(date).toBeInTheDocument()
  })
})
