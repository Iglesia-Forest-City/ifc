import { render, screen } from 'test-utils'
import { Events } from './Events'
import { mockData } from './data.mock'

describe('<Events />', () => {
  it('should render', () => {
    render(<Events {...mockData} />)
    const title = screen.getByRole('heading', { level: 2, name: mockData.title })
    expect(title).toBeInTheDocument()
  })
})
