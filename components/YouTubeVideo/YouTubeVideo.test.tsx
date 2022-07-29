import { render, screen } from 'test-utils'
import { YouTubeVideo } from './YouTubeVideo'
import { mockData } from './data.mock'

describe('<YouTubeVideo />', () => {
  it('should render', () => {
    render(<YouTubeVideo {...mockData} />)
    const title = screen.getByTitle(mockData.title)
    expect(title).toBeInTheDocument()
  })
})
