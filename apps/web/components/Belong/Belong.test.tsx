import { render, screen } from 'test-utils'
import { Belong } from './Belong'
import { mockData } from './data.mock'

describe('<Belong />', () => {
  it('should render', () => {
    render(<Belong {...mockData} />)
    const title = screen.getByRole('heading', { level: 2, name: mockData.title })
    expect(title).toBeInTheDocument()
  })
})
