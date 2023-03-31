import { render, screen } from 'test-utils'
import { Podcast } from './Podcast'
import { mockData } from './data.mock'

describe('<Podcast />', () => {
  it('should render', () => {
    render(<Podcast {...mockData} />)
    const title = screen.getByRole('heading', { level: 2, name: mockData.title })
    expect(title).toBeInTheDocument()
  })
})
